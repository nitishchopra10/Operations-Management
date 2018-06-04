package com.sopra.token.serviceImpl;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.sopra.dto.AuthTokenDTO;
import com.sopra.token.service.TokenService;

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
	@Value("${signinKey}")
	private String secretKey;

	public TokenServiceImpl() {

		// THIS IS NOT A SECURE PRACTICE!
		signatureAlgorithm = SignatureAlgorithm.HS512;
		// TRY TO GET THIS KEY FROM THE CONFIG/PROPERTIES FILE
		// secretKey =
		// "L7A/6zARSkK1j7Vd5SDD9pSSqZlqF7mAhiOgRbgv9Smce6tf4cJnvKOjtKPxNNnWQj+2lQEScm3XIUjhW+YVZg==";
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
