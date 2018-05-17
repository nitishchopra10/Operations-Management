package com.tdm.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="employee",schema="sopra")
public class Employee implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 4435256009995728861L;

	private Long empId;
	
	private String name;
	
	private Long mCode;
	
	private Long contactNumber;
	
	private String project;
	
	private String address;
	
	private String subLevel;
	
	private String n1;
	
	private String n2;
	
	private String seat_no;

	private List<Assets> assetList;
	
	private Boolean status;

	public Employee() {
		
	}
	public Employee(Long empId, String name, Long mCode, Long contactNumber, String project, String address,
			String subLevel, String n1, String n2) {
		super();
		this.empId = empId;
		this.name = name;
		this.mCode = mCode;
		this.contactNumber = contactNumber;
		this.project = project;
		this.address = address;
		this.subLevel = subLevel;
		this.n1 = n1;
		this.n2 = n2;
	}
	
	@Id
	@Column(name = "EmpID")
	public Long getEmpId() {
		return empId;
	}

	public void setEmpId(Long empId) {
		this.empId = empId;
	}

	@Column(name="Employee_Name",nullable=false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column()
	public Long getmCode() {
		return mCode;
	}

	public void setmCode(Long mCode) {
		this.mCode = mCode;
	}
	
	@Column(name= "Phone_Number",nullable = true)
	public Long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(Long contactNumber) {
		this.contactNumber = contactNumber;
	}

	@Column(name = "Project")
	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	@Column(name = "Address",nullable = true)
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	@Column(name = "Sub_Level")
	public String getSubLevel() {
		return subLevel;
	}

	public void setSubLevel(String subLevel) {
		this.subLevel = subLevel;
	}

	@Column(name = "N_1")
	public String getN1() {
		return n1;
	}

	public void setN1(String n1) {
		this.n1 = n1;
	}

	@Column(name = "N_2" )
	public String getN2() {
		return n2;
	}

	public void setN2(String n2) {
		this.n2 = n2;
	}
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval= true)
	@JoinTable(schema="sopra")
	public List<Assets> getAssetList() {
		return assetList;
	}
	public void setAssetList(List<Assets> assetList) {
		this.assetList = assetList;
	}
	@Column(name="status")
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	@Column(name = "seat_no")
	public String getSeat_no() {
		return seat_no;
	}
	public void setSeat_no(String seat_no) {
		this.seat_no = seat_no;
	}
	
	 
	
}
