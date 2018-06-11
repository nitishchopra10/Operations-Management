package com.delivery.portfolio.service.api;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.delivery.portfolio.dto.DeliveryPortfolioDTO;
import com.delivery.portfolio.models.DeliveryPortfolio;
import com.opm.utility.dtos.EmployeeDTO;

public interface IDeliveryPortfolioService {

	List<DeliveryPortfolioDTO> getData();

	ResponseEntity<DeliveryPortfolioDTO> updateData(DeliveryPortfolioDTO deliveryPortfolioDto);

	Boolean softDelete(Object[] recordIds);

	List<DeliveryPortfolio> searchBy(String searchBy, String search);
	
	public List<EmployeeDTO> getEmployeeByAccount(String account);
	
	

}
