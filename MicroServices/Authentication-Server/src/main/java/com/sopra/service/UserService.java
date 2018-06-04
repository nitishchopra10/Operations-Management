package com.sopra.service;

import com.sopra.dto.AuthTokenDTO;
import com.sopra.dto.AuthenticationDTO;

/**
 * @author tsharma
 *
 */
public interface UserService {
	public boolean addUser(AuthenticationDTO user);
	
	public String authenticateUser(AuthenticationDTO authUser);
	
	public AuthTokenDTO getParsedToken(String token);

}
