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

	private String username;
	private List<String> roles;
	@JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
	private Date expirationDate;

	public AuthTokenDTO() {
	};

	public AuthTokenDTO(String username, List<String> roles, Date expirationDate) {
		super();
		this.username = username;
		this.roles = roles;
		this.expirationDate = expirationDate;
	}

	public List<String> roleSetToRoleString(Set<RolesDTO> roles) {
		return roles.stream().map(p -> p.getName()).collect(Collectors.toList());
	}

	public String getUsername() {
		return username;
	}

	public List<String> getRoles() {
		return roles;
	}

	public Date getExpirationDate() {
		return expirationDate;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public void setExpirationDate(Date expirationDate) {
		this.expirationDate = expirationDate;
	}

}
