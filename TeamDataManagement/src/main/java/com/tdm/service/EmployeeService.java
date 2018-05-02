package com.tdm.service;

import java.util.List;

import com.tdm.dto.EmployeeDTO;

public interface EmployeeService {
	
	 public List<EmployeeDTO> getAllEmployees();
	 
	 public boolean add(EmployeeDTO emp);
	 
	 public boolean update(EmployeeDTO emp);
	 
	 public EmployeeDTO searchById(Long id);
	 
	 public List<EmployeeDTO> searchByName(String name);

}
