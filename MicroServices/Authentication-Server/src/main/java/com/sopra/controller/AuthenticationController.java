package com.sopra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sopra.dto.AuthTokenDTO;
import com.sopra.dto.AuthenticationDTO;
import com.sopra.serviceImpl.UserServiceImpl;

/**
 * @author tsharma
 *
 */
@RestController("/authenticate")
public class AuthenticationController {

	@Autowired
	private UserServiceImpl userService;

	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody AuthenticationDTO user) {
		String token = userService.authenticateUser(user);
		return new ResponseEntity<String>(token, HttpStatus.OK);

	}

	@PostMapping("/register")
	public ResponseEntity<String> addUser(@RequestBody AuthenticationDTO user) {
		userService.addUser(user);
		return null;

	}
	@PostMapping("/getToken")
	public AuthTokenDTO getParsedToken(@RequestBody String token){
		return userService.getValidatedToken(token);
	}

}
