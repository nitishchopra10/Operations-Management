package com.sopra.filters;

import javax.servlet.http.HttpServletRequest;

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
	@Autowired
	private TokenStoreRepository tokenStoreRepository;

	@Override
	public boolean shouldFilter() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public Object run() throws ZuulException {
    	System.out.println("Running PRE FILTER");

		 RequestContext ctx = RequestContext.getCurrentContext();
		    HttpServletRequest request = ctx.getRequest();
		    String header = request.getHeader("Authorization");
		    if(request.getRequestURI().toUpperCase().contains("AUTHENTICATE")) {
		    	System.out.println("Request Forwarded to Authorization");
		    	return null;
		    }
		    else if (header == null || header.isEmpty()) {
		    	System.out.println("Request going to :" + request.getRequestURL());
		       ctx.setResponseStatusCode(401);
		       ctx.setSendZuulResponse(false);
		    }
		    /*else {
		    	 ctx.setResponseStatusCode(401);
			     ctx.setSendZuulResponse(false);
			 }*/
		   
		    
		    else {
		    	TokenStoreDTO tokenData = TokenMapper.INSTANCE.tokenStoreToTokenStoreDTO(tokenStoreRepository.findByToken(header));
		    	if(tokenData!= null) {
		    	
		    	if(tokenData.getExpiration().getTime() < System.currentTimeMillis()) {
			    	 ctx.setResponseStatusCode(401);
				     ctx.setSendZuulResponse(false);
		    		}
		    	else {
		    		return null;
		    	}
		    	}
		    }
		return null;
	}

	@Override
	public String filterType() {
		// TODO Auto-generated method stub
		return "pre";
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		return 1;
	}

}
