package com.sopra.serviceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.sopra.dto.AuthTokenDTO;
import com.sopra.dto.AuthenticationDTO;
import com.sopra.dto.RolesDTO;
import com.sopra.dto.UserDTO;
import com.sopra.models.Roles;
import com.sopra.models.User;
import com.sopra.repositories.UserRepository;
import com.sopra.service.UserService;
import com.sopra.token.serviceImpl.TokenServiceImpl;

/**
 * @author tsharma
 *
 */
@Service
public class UserServiceImpl implements UserService{
	
	private static final  long EXPIRATION_TIME = 864_000_000; // 10 day
	private static final String INVALID_CREDENTIALS = "INVALID_CREDENTIALS";
	@Autowired
	UserRepository userRepository;
	@Autowired
	TokenServiceImpl tokenService;
	
	private AuthTokenDTO dummy = new AuthTokenDTO();
	
	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


	public boolean addUser(AuthenticationDTO user) {
		String encoded_password = encoder.encode(user.getPassword());
		user.setPassword(encoded_password);
		User new_user = new User();
		new_user.setUsername(user.getUsername());
		new_user.setPassword(encoded_password);
		Set<Roles> roless = new HashSet<Roles>();
		Roles role = new Roles();
		role.setName("Admin");
		roless.add(role);
		new_user.setRoles(roless);
		userRepository.save(new_user);
		return true;
	}
	
	public String authenticateUser(AuthenticationDTO authUser) {
		User existing_user = userRepository.findByUsernameContainsIgnoreCase(authUser.getUsername());
		if(encoder.matches(authUser.getPassword(), existing_user.getPassword())) {
			AuthTokenDTO tokenData = new AuthTokenDTO();
			List<String> roles = new ArrayList();
			tokenData.setUsername(existing_user.getUsername());
			existing_user.getRoles().forEach(role -> roles.add(role.getName()));
			tokenData.setRoles(roles);
			tokenData.setExpirationDate(generateExpirationDate());
			String token = tokenService.createJsonWebToken(tokenData);
			return token;
		}
		else
			return INVALID_CREDENTIALS;
	}

	private Date generateExpirationDate() {
		// TODO Auto-generated method stub		
		return new Date(System.currentTimeMillis() + EXPIRATION_TIME);
	}
	public AuthTokenDTO getValidatedToken(String token) {
		AuthTokenDTO tokenData = tokenService.parseAndReturn(token);
		return tokenData;
	}
}
