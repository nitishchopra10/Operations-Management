package com.sopra.filters;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;

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

	private static final String INVALID_CREDENTIALS = "INVALID_CREDENTIALS";  
	@Autowired
	private TokenStoreRepository tokenStoreRepository;

	@Autowired
	private AuthenticationServerProxy authProxy;
	
	@Override
	public boolean shouldFilter() {
		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest();
		if (request.getRequestURI().toUpperCase().contains("LOGIN")) {
			return true;
		} else
			return false;
	}

	@Override
	public Object run() throws ZuulException {
		TokenStoreDTO token = new TokenStoreDTO();
		RequestContext ctx = RequestContext.getCurrentContext();
		try (final InputStream responseDataStream = ctx.getResponseDataStream()) {
			final String responseData = CharStreams.toString(new InputStreamReader(responseDataStream, "UTF-8"));
			if(responseData.equalsIgnoreCase(INVALID_CREDENTIALS)) {
				ctx.setResponseBody(responseData);
				return null;
			}
			ctx.setResponseBody(responseData);
			System.out.println(responseData);
			token.setToken(responseData);
			AuthTokenDTO parsedToken = authProxy.getParsedToken(responseData);
			
			token.setExpiration(parsedToken.expirationDate);
			System.out.println(responseData);
			if (tokenStoreRepository.findByToken(responseData) == null) {
				tokenStoreRepository.save(TokenMapper.INSTANCE.tokenStoreDTOToTokenStore(token));
			}
		} catch (IOException e) {
			// logger.warn("Error reading body",e);
			System.out.println(e);
			return null;
		}
		return null;
	}

	@Override
	public String filterType() {
		// TODO Auto-generated method stub
		return "post";
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		return 9;
	}

}
