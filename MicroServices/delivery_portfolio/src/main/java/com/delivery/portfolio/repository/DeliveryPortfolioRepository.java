package com.delivery.portfolio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.delivery.portfolio.models.DeliveryPortfolio;

@Repository
public interface DeliveryPortfolioRepository extends JpaRepository<DeliveryPortfolio, Long> {
	
	
	List<DeliveryPortfolio> findByAccountContainsIgnoreCase(String code);
	
	List<DeliveryPortfolio> findByTechnologyStacksContainsIgnoreCase(String code);
	
												
	public static final String RECORD_STATUS ="SELECT * FROM opm.delivery_portfolio p WHERE NOT p.record_status =:status ORDER BY p.id";
	@Query(value = RECORD_STATUS, nativeQuery = true)
	List<DeliveryPortfolio> findByRecordStatusNot(@Param("status") String status);

	 
}
