package com.sopra.filters;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import com.sopra.Mapper.TokenMapper;
import com.sopra.dto.TokenStoreDTO;
import com.sopra.repository.TokenStoreRepository;

/**
 * @author tsharma
 *
 */
public class AuthenticationFilter extends ZuulFilter {
	private static Logger logger = LoggerFactory.getLogger(AuthenticationFilter.class);
	@Autowired
	private TokenStoreRepository tokenStoreRepository;

	@Override
	public boolean shouldFilter() {
		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest();
		// Check for Pre-Flight call and let it pass without filtering
		if ("OPTIONS".equals(request.getMethod())) {
			logger.info("Options " + request.getRequestURI() + "PreFlight!");
			return false;
		}
		// run otherwise
		return true;
	}

	@Override
	public Object run() throws ZuulException {
		logger.info("Running PRE FILTER");

		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest();
		String header = request.getHeader("Authorization");
		// if request is going to AUTHENTICATE service (gateway prefix) let it pass
		if (request.getRequestURI().toUpperCase().contains("AUTHENTICATE")) {
			logger.info("Request Forwarded to Authorization");
			return null;
		}
		// otherwise if it doesn't have a Authorization header stop it!!
		else if (header == null || header.isEmpty()) {
			logger.info("Request going to :" + request.getRequestURL());
			ctx.setResponseStatusCode(401); // Set Response status to 401 Unathorized
			ctx.setSendZuulResponse(false);
		}

		else {
			// Contains Token in Authorization header the find token from token store(i.e
			// valid token)
			TokenStoreDTO tokenData = TokenMapper.INSTANCE
					.tokenStoreToTokenStoreDTO(tokenStoreRepository.findByToken(header));
			if (tokenData != null) {
				// check if token has expired or not
				if (tokenData.getExpiration().getTime() < System.currentTimeMillis()) {
					logger.info("token expired!");
					ctx.setResponseStatusCode(401);
					ctx.setSendZuulResponse(false);
				} else {
					return null;
				}
			}
		}
		return null;
	}

	@Override
	public String filterType() {
		return "pre";
	}

	@Override
	public int filterOrder() {
		return 1;
	}

}
