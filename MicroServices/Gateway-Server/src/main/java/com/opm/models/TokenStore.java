package com.opm.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

/**
 * @author tsharma
 *
 */
@Entity
@Table(name = "token_store", schema = "sopra")
public class TokenStore {

	private String token;
	private int id;
	@JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ")
	private Date expiration;

	public TokenStore() {
		// TODO Auto-generated constructor stub
	}

	@Column(name = "token")
	public String getToken() {
		return token;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getId() {
		return id;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "expiration")
	public Date getExpiration() {
		return expiration;
	}

	public void setExpiration(Date expiration) {
		this.expiration = expiration;
	}

}
