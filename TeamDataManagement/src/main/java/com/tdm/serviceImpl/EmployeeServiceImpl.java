package com.tdm.serviceImpl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdm.dto.EmployeeDTO;
import com.tdm.mappers.EmployeeMapper;
import com.tdm.models.Employee;
import com.tdm.repository.EmployeeRepository;
import com.tdm.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeRepository repository;
	
	
	 public List<EmployeeDTO> getAllEmployees(){
				return EmployeeMapper.INSTANCE.employeeListToEmployeeDTOList(repository.findAll());
	}


	public boolean add(EmployeeDTO emp) {
		if(repository.save(EmployeeMapper.INSTANCE.employeeDTOToEmployee(emp)) != null) {
			return true;
		}
		else
		return false;
	}


	public boolean update(EmployeeDTO emp) {
		Optional<Employee> employee = repository.findById(emp.getEmpId());
		if(employee.isPresent()) {
			repository.save(EmployeeMapper.INSTANCE.employeeDTOToEmployee(emp));
			return true;
		}
		else
			return false;
	
	}


	public EmployeeDTO searchById(Long id) {
		Optional<Employee> emp = repository.findById(id);
		if(emp.isPresent()) {
			return EmployeeMapper.INSTANCE.employeeToEmployeeDTO(emp.get());
		}
		else
		return null;
	}


	public List<EmployeeDTO> searchByName(String name) {
		List<EmployeeDTO> empList = EmployeeMapper.INSTANCE.employeeListToEmployeeDTOList(repository.findAll());
		List<EmployeeDTO> matches = empList.stream()
									.filter(emp -> emp.getName().toUpperCase().contains(name.toUpperCase()) || emp.getName().equalsIgnoreCase(name))
									.collect(Collectors.toList());
		if(matches != null) {
			return matches;
		}
		else
			return null;
	}
	
}
