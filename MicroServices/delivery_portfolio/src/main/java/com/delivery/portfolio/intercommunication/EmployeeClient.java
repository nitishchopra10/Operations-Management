package com.delivery.portfolio.intercommunication;

import java.util.List;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.sopra.utility.dtos.EmployeeDTO;


@FeignClient("team-data-management")
@RibbonClient("team-data-management")
public interface EmployeeClient {

	@GetMapping("/department/{department}")
	public List<EmployeeDTO> searchEmployeeByDepartment(@PathVariable("department") String department);
		
}
