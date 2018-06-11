package com.opm.intercommunication;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.opm.dto.AuthTokenDTO;

/**
 * @author tsharma
 *
 */
@FeignClient("authentication-server")
@RibbonClient("authentication-server")
public interface AuthenticationServerProxy {

	@PostMapping("/getToken")
	public AuthTokenDTO getParsedToken(@RequestBody String token);
}
