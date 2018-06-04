package com.tdm.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdm.dto.EmployeeDTO;
import com.tdm.mappers.EmployeeMapper;
import com.tdm.models.Employee;
import com.tdm.repository.EmployeeRepository;
import com.tdm.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private static final Boolean STATUS_INVALID = false;
	private static final String CASE_UPDATE = "UPDATE";
	private static final String CASE_VIEWVALID = "ALL";
	@Autowired
	private EmployeeRepository repository;

	public List<EmployeeDTO> getAllEmployees() {
		final List<EmployeeDTO> empList = EmployeeMapper.INSTANCE.employeeListToEmployeeDTOList(repository.findAll());
		if (empList != null) {
			return empList;
		} else
			return null;
	}

	public List<EmployeeDTO> getAllActiveEmployees() {
		final List<EmployeeDTO> empList = EmployeeMapper.INSTANCE
				.employeeListToEmployeeDTOList(repository.findByStatusNot(STATUS_INVALID));
		if (empList != null) {
			return empList;
		} else
			return null;
	}
	@Transactional
	public boolean add(EmployeeDTO emp) {
		if (repository.save(EmployeeMapper.INSTANCE.employeeDTOToEmployee(emp)) != null) {
			return true;
		} else
			return false;
	}
	@Transactional
	public boolean update(EmployeeDTO emp) {
		final Optional<Employee> employee = repository.findById(emp.getEmpId());
		if (employee.isPresent()) {
			repository.save(EmployeeMapper.INSTANCE.employeeDTOToEmployee(emp));
			return true;
		} else
			return false;

	}

	public EmployeeDTO searchById(Long id, String type) {

		Optional<Employee> emp = repository.findById(id);

		if (emp.isPresent()) {
			if (type.equalsIgnoreCase(CASE_VIEWVALID)) {
				if (emp.get().getStatus()) {
					return EmployeeMapper.INSTANCE.employeeToEmployeeDTO(emp.get());
				}

			} else if (type.equalsIgnoreCase(CASE_UPDATE)) {
				return EmployeeMapper.INSTANCE.employeeToEmployeeDTO(emp.get());
			}
		}
		return null;

	}

	public List<EmployeeDTO> searchByName(String name, String type) {
		List<EmployeeDTO> matches = null;
		if (type.equalsIgnoreCase(CASE_VIEWVALID)) {
			List<EmployeeDTO> empList = EmployeeMapper.INSTANCE
					.employeeListToEmployeeDTOList(repository.findByStatusNot(STATUS_INVALID));
			matches = empList.stream().filter(emp -> emp.getName().toUpperCase().contains(name.toUpperCase())
					|| emp.getName().equalsIgnoreCase(name)).collect(Collectors.toList());
		} else if (type.equalsIgnoreCase(CASE_UPDATE)) {
			List<EmployeeDTO> empList = EmployeeMapper.INSTANCE.employeeListToEmployeeDTOList(repository.findAll());
			matches = empList.stream().filter(emp -> emp.getName().toUpperCase().contains(name.toUpperCase())
					|| emp.getName().equalsIgnoreCase(name)).collect(Collectors.toList());
		}
		if (matches != null) {
			return matches;
		} else
			return null;
	}
	@Transactional
	public boolean softDelete(Long id[]) {
		final List<Employee> empList = new ArrayList<>();
		for (int i = 0; i < id.length; i++) {
			Optional<Employee> emp = repository.findById(id[i]);
			if (emp.isPresent()) {
				emp.get().setStatus(false);
				empList.add(emp.get());
			}
		}
		if (repository.saveAll(empList) != null) {
			return true;
		} else
			return false;
	}

	public List<EmployeeDTO> searchByAccount(String department) {
		final List<Employee> empList = repository.findByAccountIgnoreCase(department);
		if(empList != null) {
			return EmployeeMapper.INSTANCE.employeeListToEmployeeDTOList(empList);
		}
		else
		return null;
	}

}
