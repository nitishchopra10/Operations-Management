package com.sopra.admin.dto;

import java.util.List;

public class AdminDto {

	String deliveryUnit;
	
	String countryName;
	
	String projects;
	
	List<Integer> employee;
	
	public String getCountryName() {
		return countryName;
	}
	public String getDeliveryUnit() {
		return deliveryUnit;
	}
	public String getProjects() {
		return projects;
	}
	public List<Integer> getEmployee() {
		return employee;
	}
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}
	public void setDeliveryUnit(String deliveryUnit) {
		this.deliveryUnit = deliveryUnit;
	}
	public void setProjects(String projects) {
		this.projects = projects;
	}
	public void setEmployee(List<Integer> employee) {
		this.employee = employee;
	}
	
	
}
