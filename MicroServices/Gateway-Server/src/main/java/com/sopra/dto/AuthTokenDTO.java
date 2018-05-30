package com.sopra.dto;

import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;



/**
 * @author tsharma
 *
 */
public class AuthTokenDTO {

	public String username;
	public List<String> roles;
	@JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
	public Date expirationDate;
	
	public AuthTokenDTO() {};
	
	public AuthTokenDTO(String username, List<String> roles, Date expirationDate) {
		super();
		this.username = username;
		this.roles = roles;
		this.expirationDate = expirationDate;
	}
	
	public  List<String> roleSetToRoleString(Set<RolesDTO> roles) {
		return roles.stream().map(p -> p.getName()).collect(Collectors.toList());
	}
	
}
