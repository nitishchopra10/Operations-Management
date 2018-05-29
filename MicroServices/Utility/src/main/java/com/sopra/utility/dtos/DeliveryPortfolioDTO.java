package com.sopra.utility.dtos;

import java.io.Serializable;

public class DeliveryPortfolioDTO implements Serializable {

	private static final long serialVersionUID = 146910964706869104L;

	private Long id;

	private String account;

	private Boolean supportService;

	private Boolean enhancements;

	private Boolean developmentService;

	private Boolean testingService;

	private Boolean dBASupport;

	private Boolean iAAS;

	private Boolean infraMonitoring;

	private String technologyStacks;

	private String status;
	
	private String recordStatus;
	
	
	public DeliveryPortfolioDTO() {
		
	}

	public DeliveryPortfolioDTO(Long id, String account, Boolean supportService, Boolean enhancements,
			Boolean developmentService, Boolean testingService, Boolean dBASupport, Boolean iAAS,
			Boolean infraMonitoring, String technologyStacks, String status, String recordStatus) {
		super();
		this.id = id;
		this.account = account;
		this.supportService = supportService;
		this.enhancements = enhancements;
		this.developmentService = developmentService;
		this.testingService = testingService;
		this.dBASupport = dBASupport;
		this.iAAS = iAAS;
		this.infraMonitoring = infraMonitoring;
		this.technologyStacks = technologyStacks;
		this.status = status;
		this.recordStatus = recordStatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public Boolean getSupportService() {
		return supportService;
	}

	public void setSupportService(Boolean supportService) {
		this.supportService = supportService;
	}

	public Boolean getEnhancements() {
		return enhancements;
	}

	public void setEnhancements(Boolean enhancements) {
		this.enhancements = enhancements;
	}

	public Boolean getDevelopmentService() {
		return developmentService;
	}

	public void setDevelopmentService(Boolean developmentService) {
		this.developmentService = developmentService;
	}

	public Boolean getTestingService() {
		return testingService;
	}

	public void setTestingService(Boolean testingService) {
		this.testingService = testingService;
	}

	public Boolean getdBASupport() {
		return dBASupport;
	}

	public void setdBASupport(Boolean dBASupport) {
		this.dBASupport = dBASupport;
	}

	public Boolean getiAAS() {
		return iAAS;
	}

	public void setiAAS(Boolean iAAS) {
		this.iAAS = iAAS;
	}

	public Boolean getInfraMonitoring() {
		return infraMonitoring;
	}

	public void setInfraMonitoring(Boolean infraMonitoring) {
		this.infraMonitoring = infraMonitoring;
	}

	public String getTechnologyStacks() {
		return technologyStacks;
	}

	public void setTechnologyStacks(String technologyStacks) {
		this.technologyStacks = technologyStacks;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRecordStatus() {
		return recordStatus;
	}

	public void setRecordStatus(String recordStatus) {
		this.recordStatus = recordStatus;
	}

	
}

	