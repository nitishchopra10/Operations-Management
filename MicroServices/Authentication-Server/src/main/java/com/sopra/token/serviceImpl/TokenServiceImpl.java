package com.sopra.token.serviceImpl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.sopra.dto.AuthTokenDTO;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;



/**
 * @author tsharma
 *
 */
@Service
public class TokenServiceImpl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              {
	 
	private SignatureAlgorithm signatureAlgorithm;
	//@Value("${singinKey}")
	private String secretKey;
	 
	    public TokenServiceImpl() {
	 
	        // THIS IS NOT A SECURE PRACTICE!
	        // For simplicity, we are storing a static key here.
	        // Ideally, in a microservices environment, this key would kept on a
	        // config server.
	        signatureAlgorithm = SignatureAlgorithm.HS512;
	        secretKey = "L7A/6zARSkK1j7Vd5SDD9pSSqZlqF7mAhiOgRbgv9Smce6tf4cJnvKOjtKPxNNnWQj+2lQEScm3XIUjhW+YVZg==";
	        }
	 
	    public String createJsonWebToken(AuthTokenDTO authTokenDetailsDTO) {
	        String token = Jwts.builder().setSubject(authTokenDetailsDTO.username).claim("username", authTokenDetailsDTO.username)
	                .claim("roles", authTokenDetailsDTO.roles).setExpiration(authTokenDetailsDTO.expirationDate)
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
	            List roleNames = (List) claims.get("roles");
	            Date expirationDate = claims.getExpiration();
	 
	            authTokenDetailsDTO = new AuthTokenDTO();
	            authTokenDetailsDTO.username = username;
	            //authTokenDetailsDTO.email = email;
	            authTokenDetailsDTO.roles = roleNames;
	            authTokenDetailsDTO.expirationDate = expirationDate;
	        } catch (JwtException ex) {
	            System.out.println(ex);
	        }
	        return authTokenDetailsDTO;
	    }
	 
	    
	 

}
