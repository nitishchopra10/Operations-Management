package com.tdm.service;

import java.util.List;

import com.tdm.dto.EmployeeDTO;

public interface EmployeeService {

	public List<EmployeeDTO> getAllEmployees();

	public boolean add(EmployeeDTO emp);

	public boolean update(EmployeeDTO emp);

	public EmployeeDTO searchById(Long id, String type);

	public List<EmployeeDTO> searchByName(String name, String type);

	public boolean softDelete(Long id[]);

	public List<EmployeeDTO> getAllActiveEmployees();

}
