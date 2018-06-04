/**
 * 
 */
package com.sopra.token.service;

import com.sopra.dto.AuthTokenDTO;

/**
 * @author tsharma
 *
 */
public interface TokenService {
	public String createJsonWebToken(AuthTokenDTO authTokenDetailsDTO);
	
	public AuthTokenDTO parseAndReturn(String token);

}
