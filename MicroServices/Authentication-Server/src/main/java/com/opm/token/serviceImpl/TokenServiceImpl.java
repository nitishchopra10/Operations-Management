package com.opm.token.serviceImpl;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.opm.dto.AuthTokenDTO;
import com.opm.token.service.TokenService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * @author tsharma
 *
 */
@Service
public class TokenServiceImpl implements TokenService {

	private static Logger logger = LoggerFactory.getLogger(TokenServiceImpl.class);
	private SignatureAlgorithm signatureAlgorithm;
	//Get secret key from config file
	@Value("${signinKey}")
	private String secretKey;

	public TokenServiceImpl() {
		signatureAlgorithm = SignatureAlgorithm.HS512;
	}

	public String createJsonWebToken(AuthTokenDTO authTokenDetailsDTO) {
		String token = Jwts.builder().setSubject(authTokenDetailsDTO.getUsername())

				.claim("username", authTokenDetailsDTO.getUsername()).claim("roles", authTokenDetailsDTO.getRoles())
				.setExpiration(authTokenDetailsDTO.getExpirationDate())
				.signWith(getSignatureAlgorithm(), getSecretKey()).compact();
		return token;
	}

	private String getSecretKey() {
		return secretKey;
	}

	public SignatureAlgorithm getSignatureAlgorithm() {
		return signatureAlgorithm;
	}

	public AuthTokenDTO parseAndReturn(String token) {
		AuthTokenDTO authTokenDetailsDTO = null;
		try {
			Claims claims = Jwts.parser().setSigningKey(getSecretKey()).parseClaimsJws(token).getBody();
			String username = claims.getSubject();
			// String email = (String) claims.get("email");
			List<String> roleNames = (List<String>) claims.get("roles");
			Date expirationDate = claims.getExpiration();

			authTokenDetailsDTO = new AuthTokenDTO();
			authTokenDetailsDTO.setUsername(username);
			authTokenDetailsDTO.setRoles(roleNames);
			authTokenDetailsDTO.setExpirationDate(expirationDate);
		} catch (JwtException ex) {
			logger.error(ex.getMessage(), ex);
		}
		return authTokenDetailsDTO;
	}

}
