package com.opm.serviceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.opm.dto.AuthTokenDTO;
import com.opm.dto.AuthenticationDTO;
import com.opm.models.Roles;
import com.opm.models.User;
import com.opm.repositories.UserRepository;
import com.opm.service.UserService;
import com.opm.token.serviceImpl.TokenServiceImpl;

/**
 * @author tsharma
 *
 */
@Service
public class UserServiceImpl implements UserService {

	private static Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

	private static final long EXPIRATION_TIME = 864_000_000; // 10 day
	private static final String INVALID_CREDENTIALS = "INVALID_CREDENTIALS";
	@Autowired
	UserRepository userRepository;
	@Autowired
	TokenServiceImpl tokenService;

	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	//Add a new User
	public boolean addUser(AuthenticationDTO user) {
		if (userRepository.findByUsernameContainsIgnoreCase(user.getUsername()) == null) {
			logger.info("NEW USER!!!!! : " + user.getUsername());
			//encode the password before storing it
			String encoded_password = encoder.encode(user.getPassword());
			user.setPassword(encoded_password);
			User new_user = new User();
			new_user.setUsername(user.getUsername());
			new_user.setPassword(encoded_password);
			Set<Roles> roless = new HashSet<Roles>();
			// Change Role type here
			Roles role = new Roles();
			role.setName("Admin");
			roless.add(role);
			new_user.setRoles(roless);
			userRepository.save(new_user);
			logger.info("New User Created!");
			return true;

		} else {
			logger.info("USER ALREADY EXISTS!");
			return false;
		}
	}

	public String authenticateUser(AuthenticationDTO authUser) {
		//Check for Pre-existing User
		User existing_user = userRepository.findByUsernameContainsIgnoreCase(authUser.getUsername());
		if (existing_user == null) {
			logger.info(INVALID_CREDENTIALS);
			return INVALID_CREDENTIALS;
		}
		// Check password if user exists
		if (encoder.matches(authUser.getPassword(), existing_user.getPassword())) {
			// if password matches create token
			AuthTokenDTO tokenData = new AuthTokenDTO();
			List<String> roles = new ArrayList<String>();
			tokenData.setUsername(existing_user.getUsername());
			existing_user.getRoles().forEach(role -> roles.add(role.getName()));
			tokenData.setRoles(roles);
			tokenData.setExpirationDate(generateExpirationDate());
			String token = tokenService.createJsonWebToken(tokenData);
			logger.info("Token Sucessfully Created!!");
			return token;
		} else
			return INVALID_CREDENTIALS;
	}

	private Date generateExpirationDate() {
		
		return new Date(System.currentTimeMillis() + EXPIRATION_TIME);
	}

	public AuthTokenDTO getParsedToken(String token) {
		AuthTokenDTO tokenData = tokenService.parseAndReturn(token);
		return tokenData;
	}

}
