/**
 * 
 */
package com.opm.token.service;

import com.opm.dto.AuthTokenDTO;

/**
 * @author tsharma
 *
 */
public interface TokenService {
	public String createJsonWebToken(AuthTokenDTO authTokenDetailsDTO);
	
	public AuthTokenDTO parseAndReturn(String token);

}
