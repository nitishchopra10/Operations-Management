package com.sopra.filters;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.google.common.io.CharStreams;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import com.sopra.Mapper.TokenMapper;
import com.sopra.dto.AuthTokenDTO;
import com.sopra.dto.TokenStoreDTO;
import com.sopra.intercommunication.AuthenticationServerProxy;
import com.sopra.repository.TokenStoreRepository;

/**
 * @author tsharma
 *
 */
public class CatchTokenFilter extends ZuulFilter {

	private static Logger logger = LoggerFactory.getLogger(CatchTokenFilter.class);

	private static final String INVALID_CREDENTIALS = "INVALID_CREDENTIALS";
	@Autowired
	private TokenStoreRepository tokenStoreRepository;

	@Autowired
	private AuthenticationServerProxy authProxy;

	@Override
	public boolean shouldFilter() {
		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest();
		// IGNORE IF PRE-FLIGHT
		if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
			System.out.println("Options " + request.getMethod());
			return false;
		}
		// RUN IF THE REQUEST COMING FROM LOGIN or REGISTRATION i.e. it contains a token
		else if (request.getRequestURI().toUpperCase().matches("LOGIN|REGISTER")) {
			return true;
		}
		// DONT RUN OTHERWISE
		return false;
	}

	@Override
	public Object run() throws ZuulException {
		logger.info("Running POST FILTER");
		TokenStoreDTO token = new TokenStoreDTO();
		RequestContext ctx = RequestContext.getCurrentContext();
		// TRY TO READ THE TOKEN FROM THE RESPONSE BODY
		try (final InputStream responseDataStream = ctx.getResponseDataStream()) {
			final String responseData = CharStreams.toString(new InputStreamReader(responseDataStream, "UTF-8"));
			// IF INVALID LOGIN
			if (responseData.equalsIgnoreCase(INVALID_CREDENTIALS)) {
				ctx.setResponseBody(responseData);
				return null;
			}
			// ELSE TRY TO PARSE TOKEN AND STORE IT IN DB ALONG WITH EXPIRE TIME
			ctx.setResponseBody(responseData);
			logger.debug(responseData);
			token.setToken(responseData);
			// GET PARSED TOKEN FROM FEIGN PROXY TO GET THE EXPIRE TIME
			AuthTokenDTO parsedToken = authProxy.getParsedToken(responseData);

			token.setExpiration(parsedToken.getExpirationDate());
			System.out.println(responseData);
			// IF NO SUCH TOKEN ALREADY EXISTS SAVE IT
			if (tokenStoreRepository.findByToken(responseData) == null) {
				tokenStoreRepository.save(TokenMapper.INSTANCE.tokenStoreDTOToTokenStore(token));
			}
		} catch (IOException e) {
			logger.warn("Error reading body", e);
			return null;
		}
		return null;
	}

	@Override
	public String filterType() {
		return "post";
	}

	@Override
	public int filterOrder() {
		return 9; // ORDER >10 OR USUALLY 10 CAUSES ERROR DUE TO CLOSING OF DATA STREAM AS RESPONSE BODY IS ALREADY SENT
	}

}
