package com.tdm.dto;


public class EmployeeDTO {

private Long empId;
	
	private String name;
	
	private int mCode;
	
	private Long contactNumber;
	
	private String project;
	
	private String address;
	
	private String subLevel;
	
	private String n1;
	
	private String n2;

	public EmployeeDTO() {
		
	}
	
	public EmployeeDTO(Long empId, String name, int mCode, Long contactNumber, String project, String address,
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

	public Long getEmpId() {
		return empId;
	}

	public void setEmpId(Long empId) {
		this.empId = empId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getmCode() {
		return mCode;
	}

	public void setmCode(int mCode) {
		this.mCode = mCode;
	}

	public Long getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(Long contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getSubLevel() {
		return subLevel;
	}

	public void setSubLevel(String subLevel) {
		this.subLevel = subLevel;
	}

	public String getN1() {
		return n1;
	}

	public void setN1(String n1) {
		this.n1 = n1;
	}

	public String getN2() {
		return n2;
	}

	public void setN2(String n2) {
		this.n2 = n2;
	}
	
}
