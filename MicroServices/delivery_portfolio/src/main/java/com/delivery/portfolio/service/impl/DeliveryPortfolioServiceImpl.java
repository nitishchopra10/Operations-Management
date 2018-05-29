package com.delivery.portfolio.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.delivery.portfolio.dto.DeliveryPortfolioDTO;
import com.delivery.portfolio.intercommunication.EmployeeClient;
import com.delivery.portfolio.mapper.DeliveryPortfolioMapper;
import com.delivery.portfolio.models.DeliveryPortfolio;
import com.delivery.portfolio.repository.DeliveryPortfolioRepository;
import com.delivery.portfolio.service.api.IDeliveryPortfolioService;
import com.sopra.utility.dtos.EmployeeDTO;

@Service
public class DeliveryPortfolioServiceImpl implements IDeliveryPortfolioService {

	public static final String STATUS_INACTIVE = "INACTIVE";
	
	@Autowired
	private DeliveryPortfolioRepository deliveryPortfolioRepository;

	@Autowired
	private DeliveryPortfolioMapper deliveryPortfolioMapper;
	@Autowired
	private EmployeeClient employeeProxy;

	@Override
	public List<DeliveryPortfolioDTO> getData() {
		List<DeliveryPortfolio> list = this.deliveryPortfolioRepository.findByRecordStatusNot(STATUS_INACTIVE);
		List<DeliveryPortfolioDTO> listDTO = new ArrayList<>();
		for(DeliveryPortfolio delivery:list) {
			DeliveryPortfolioDTO dto = this.deliveryPortfolioMapper.DeliveryPortfolioToDeliveryPortfolioDTO(delivery);
			listDTO.add(dto);
		}
		return listDTO;
	}
	
	@Override
	public ResponseEntity<DeliveryPortfolioDTO> updateData(DeliveryPortfolioDTO deliveryPortfolioDto) {
	  DeliveryPortfolio record = this.deliveryPortfolioMapper.DeliveryPortfolioDTOToDeliveryPortfolio(deliveryPortfolioDto);
	  this.deliveryPortfolioRepository.save(record);
	  return new ResponseEntity<>(deliveryPortfolioDto, HttpStatus.CREATED);
	}

	@Override
	public Boolean softDelete(final Object[] recordIds) {
		
		final List<DeliveryPortfolio> deliveryPortfolioList = new ArrayList<>();
		for (int i = 0; i <= recordIds.length - 1; i++) {
			final Optional<DeliveryPortfolio> record = this.deliveryPortfolioRepository.findById(Long.parseLong(recordIds[i].toString()));
			record.get().setRecordStatus(STATUS_INACTIVE);
			deliveryPortfolioList.add(record.get());			
		}

		this.deliveryPortfolioRepository.saveAll(deliveryPortfolioList);

		return true;
	}

	@Override
	public List<DeliveryPortfolio> searchBy(String searchBy, String search) {
		
		List<DeliveryPortfolio> list = new ArrayList();
		if("account".equals(searchBy)){
			list = this.deliveryPortfolioRepository.findByAccountContainsIgnoreCase(search);
			return list;
		}
		else {
			return this.deliveryPortfolioRepository.findByTechnologyStacksContainsIgnoreCase(search);
		}
	}
	
	public List<EmployeeDTO> getEmployeeByAccount(String account){
		List<EmployeeDTO> empList = employeeProxy.searchEmployeeByDepartment(account);
		if(empList != null) {
			return empList;
		}
		else 
			return null;
	}
	
	

}
