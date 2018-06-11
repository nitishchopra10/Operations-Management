package com.opm.dto;

import java.util.Set;

/**
 * @author tsharma
 *
 */
public class UserDTO {
	private String username;
	private String password;
	private int id;
	private Set<RolesDTO> roles;

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public int getId() {
		return id;
	}

	public Set<RolesDTO> getRoles() {
		return roles;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setRoles(Set<RolesDTO> roles) {
		this.roles = roles;
	}

}
