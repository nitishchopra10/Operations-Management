package com.delivery.portfolio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.PathParam;

import com.delivery.portfolio.dto.DeliveryPortfolioDTO;
import com.delivery.portfolio.models.DeliveryPortfolio;
import com.delivery.portfolio.service.api.IDeliveryPortfolioService;

@RestController("/dpo")
public class DeliveryPortfolioController {

	@Autowired
	private IDeliveryPortfolioService deliveryPortfolioService;

	@GetMapping("/getData")
	public List<DeliveryPortfolioDTO> getDeliveryPortfolioData() {
		return this.deliveryPortfolioService.getData();
	}
	
	@PostMapping("/updateData")
	public ResponseEntity<DeliveryPortfolioDTO> updateDeliveryPortfolioData(@RequestBody final DeliveryPortfolioDTO deliveryPortfolioDto) {
		return this.deliveryPortfolioService.updateData(deliveryPortfolioDto);
	}
	
	@PostMapping("/delData")
	public Boolean deleteDeliveryPortfolioData(@RequestBody final Object[] recordIds) {
		return this.deliveryPortfolioService.softDelete(recordIds);
		
	}
	
	@GetMapping("/searchData/{searchBy}/{search}")
	public List<DeliveryPortfolio> searchData(@PathParam("searchBy")String searchBy, @PathParam("search")String search ) {
		return this.deliveryPortfolioService.searchBy(searchBy, search);
	}
	
	
    
	
}