package com.delivery.portfolio.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "delivery_portfolio", schema = "opm")
public class DeliveryPortfolio implements Serializable{

	private static final long serialVersionUID = 1L;

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

	public DeliveryPortfolio() {
		super();
	}
	
	

	public DeliveryPortfolio(Long id, String account, Boolean supportService, Boolean enhancements,
			Boolean developmentService, Boolean testingService, Boolean dBASupport, Boolean iAAS,
			Boolean infraMonitoring, String technologyStacks, String status, String record_status) {
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
		this.recordStatus = record_status;
	}



	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "account")
	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	@Column(name = "support_service")
	public Boolean getSupportService() {
		return supportService;
	}

	public void setSupportService(Boolean supportService) {
		this.supportService = supportService;
	}

	@Column(name = "enhancements")
	public Boolean getEnhancements() {
		return enhancements;
	}

	public void setEnhancements(Boolean enhancements) {
		this.enhancements = enhancements;
	}

	@Column(name = "development_service")
	public Boolean getDevelopmentService() {
		return developmentService;
	}

	public void setDevelopmentService(Boolean developmentService) {
		this.developmentService = developmentService;
	}

	@Column(name = "testing_service")
	public Boolean getTestingService() {
		return testingService;
	}

	public void setTestingService(Boolean testingService) {
		this.testingService = testingService;
	}

	@Column(name = "dba_support")
	public Boolean getdBASupport() {
		return dBASupport;
	}

	public void setdBASupport(Boolean dBASupport) {
		this.dBASupport = dBASupport;
	}

	@Column(name = "iaas")
	public Boolean getiAAS() {
		return iAAS;
	}

	public void setiAAS(Boolean iAAS) {
		this.iAAS = iAAS;
	}

	@Column(name = "infra_monitoring")
	public Boolean getInfraMonitoring() {
		return infraMonitoring;
	}

	public void setInfraMonitoring(Boolean infraMonitoring) {
		this.infraMonitoring = infraMonitoring;
	}

	@Column(name = "technology_stacks")
	public String getTechnologyStacks() {
		return technologyStacks;
	}

	public void setTechnologyStacks(String technologyStacks) {
		this.technologyStacks = technologyStacks;
	}

	@Column(name = "status")
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	@Column(name = "record_status")
	public String getRecordStatus() {
		return recordStatus;
	}



	public void setRecordStatus(String recordStatus) {
		this.recordStatus = recordStatus;
	}

	
	

	

		
	
}
