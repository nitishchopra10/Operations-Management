package com.delivery.portfolio.mapper;

import org.mapstruct.Mapper;

import com.delivery.portfolio.dto.DeliveryPortfolioDTO;
import com.delivery.portfolio.models.DeliveryPortfolio;

@Mapper(componentModel = "spring")
public interface DeliveryPortfolioMapper {

	
	DeliveryPortfolio DeliveryPortfolioDTOToDeliveryPortfolio(DeliveryPortfolioDTO deliveryPortfolioDTO);

	
	DeliveryPortfolioDTO DeliveryPortfolioToDeliveryPortfolioDTO(DeliveryPortfolio deliveryPortfolio);

}

