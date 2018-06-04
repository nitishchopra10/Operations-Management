package com.sopra.models;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * @author tsharma
 *
 */
@Entity
@Table(name="users",schema="sopra")
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String username;
	private String password;
	private int id;
	Set<Roles> roles;
	
	@Column(name="username")
	public String getUsername() {
		return username;
	}
	@Column(name="password")
	public String getPassword() {
		return password;
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getId() {
		return id;
	}
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval= true)
	@JoinTable(schema="sopra")
	public Set<Roles> getRoles() {
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
	public void setRoles(Set<Roles> roles) {
		this.roles = roles;
	}
	
	

}
