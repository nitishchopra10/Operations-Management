package com.sopra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sopra.dto.AuthenticationDTO;
import com.sopra.dto.UserDTO;
import com.sopra.repositories.UserRepository;

@RestController
public class AuthenticationController {
	
	@Autowired
	private  UserRepository userRepository;
	
	@PostMapping("/register")
	public RequestEntity<String> registerUser(@RequestBody AuthenticationDTO user){
		List<UserDTO> userList = userRepository.findAll();
		
		
		return null;
		
		
	}

}
