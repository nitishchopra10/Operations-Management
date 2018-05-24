package com.sopra.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.sopra.dto.AuthenticationDTO;
import com.sopra.dto.UserDTO;
import com.sopra.models.User;
import com.sopra.repositories.UserRepository;
import com.sopra.service.UserService;

public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;
	
	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


	public boolean addUser(UserDTO user) {
		String encoded_password = encoder.encode(user.getPassword());
		user.setPassword(encoded_password);
		return true;
	}
	
	public boolean authenticateUser(AuthenticationDTO authUser) {
		User existing_user = userRepository.findByUsernameContainsIgnoreCase(authUser.getUsername());
		if(encoder.matches(authUser.getPassword(), existing_user.getPassword())) {
			
		}
		
		return true;
	}
}
