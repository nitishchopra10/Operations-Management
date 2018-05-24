package com.sopra.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Roles {
   int id;
   String name;
   
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
public int getId() {
	return id;
}

@Column(name="role_name")
public String getName() {
	return name;
}
public void setId(int id) {
	this.id = id;
}
public void setName(String name) {
	this.name = name;
}
   
}
