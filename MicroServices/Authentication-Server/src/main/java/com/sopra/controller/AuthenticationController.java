package com.sopra.controller;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sopra.dto.AuthTokenDTO;
import com.sopra.dto.AuthenticationDTO;
import com.sopra.serviceImpl.UserServiceImpl;
import org.slf4j.LoggerFactory;

/**
 * @author tsharma
 *
 */
@RestController("/authenticate")
public class AuthenticationController {

	private static final String USER_EXISTS = "USER_EXISTS";

	private static Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

	@Autowired
	private UserServiceImpl userService;

	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody AuthenticationDTO user) {
		logger.info("Running Authentication!!!");
		// Create the token upon successful authentication
		String token = userService.authenticateUser(user);
		logger.info("Logging in!");
		return new ResponseEntity<String>(token, HttpStatus.OK);

	}

	@PostMapping("/register")
	public ResponseEntity<String> addUser(@RequestBody AuthenticationDTO user) {
		logger.info("Registering new User :" + user.getUsername());
		if (!userService.addUser(user)) {
			logger.info("User Already Exists!");
			return new ResponseEntity<String>(USER_EXISTS, HttpStatus.OK);
		}
		logger.info("Logging in after registration!");
		String token = userService.authenticateUser(user);
		return new ResponseEntity<String>(token, HttpStatus.OK);
	}

	@PostMapping("/getToken")
	public AuthTokenDTO getParsedToken(@RequestBody String token) {
		return userService.getParsedToken(token);
	}

	
}
