package com.delivery.portfolio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.delivery.portfolio.dto.DeliveryPortfolioDTO;
import com.delivery.portfolio.models.DeliveryPortfolio;
import com.delivery.portfolio.service.api.IDeliveryPortfolioService;
import com.opm.utility.dtos.EmployeeDTO;

@RestController("/dpo")
public class DeliveryPortfolioController {

	@Autowired
	private IDeliveryPortfolioService deliveryPortfolioService;

	@GetMapping("/getData")
	public List<DeliveryPortfolioDTO> getDeliveryPortfolioData() {

		return this.deliveryPortfolioService.getData();
	}
	
	@PostMapping("/updateData")
	public ResponseEntity<DeliveryPortfolioDTO> updateDeliveryPortfolioData(@RequestBody  DeliveryPortfolioDTO deliveryPortfolioDto) {
		return this.deliveryPortfolioService.updateData(deliveryPortfolioDto);
	}
	
	@PostMapping("/delData")
	public Boolean deleteDeliveryPortfolioData(@RequestBody final Object[] recordIds) {
		return this.deliveryPortfolioService.softDelete(recordIds);
		
	}
	
	@GetMapping("/searchData/{searchBy}/{search}")
	public List<DeliveryPortfolio> searchData(@PathVariable("searchBy")String searchBy, @PathVariable("search")String search ) {
		return this.deliveryPortfolioService.searchBy(searchBy, search);
	}
	
	@GetMapping("/accountEmployee/{account}")
	public List<EmployeeDTO> getAccountEmployee(@PathVariable String account){
		return this.deliveryPortfolioService.getEmployeeByAccount(account);
	}
    
	
}
