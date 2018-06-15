package com.tdm.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdm.dto.EmployeeDTO;
import com.tdm.serviceImpl.EmployeeServiceImpl;

/**
 * @author tsharma
 *
 */
@RestController("/tdm")
public class EmployeeController {

	@Autowired
	private EmployeeServiceImpl service;

	@GetMapping("/all")
	public List<EmployeeDTO> showAll() {

		return service.getAllEmployees();

	}

	@GetMapping("/allactive")
	public List<EmployeeDTO> showAllActive() {

		return service.getAllActiveEmployees();

	}

	@PostMapping("/add")
	public ResponseEntity<EmployeeDTO> addEmployee(@RequestBody EmployeeDTO emp) {

		if (service.add(emp)) {
			return new ResponseEntity<>(HttpStatus.CREATED);
		} else
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	}

	@PostMapping("/update")
	public ResponseEntity<EmployeeDTO> updateEmployee(@RequestBody EmployeeDTO emp) {
		if (service.update(emp)) {
			return new ResponseEntity<EmployeeDTO>(emp, HttpStatus.OK);
		} else
			return new ResponseEntity<EmployeeDTO>(HttpStatus.EXPECTATION_FAILED);
	}

	@GetMapping("/search/id/{id}/type/{type}")
	public List<EmployeeDTO> searchEmployee(@PathVariable Long id,@PathVariable String type) {
		List<EmployeeDTO> emp = new ArrayList<EmployeeDTO>();
		emp.add(service.searchById(id,type));
		return emp;
	}

	@GetMapping("/search/name/{name}/type/{type}")
	public List<EmployeeDTO> searchEmployeeByName(@PathVariable String name,@PathVariable String type) {

		List<EmployeeDTO> emp = service.searchByName(name,type);
		if (emp != null) {
			return emp;
		} else
			return null;
	}
	
	@GetMapping("/department/{department}")
	public List<EmployeeDTO> searchEmployeeByDepartment(@PathVariable String department){
		
		List<EmployeeDTO> emp = service.searchByAccount(department);
		return emp;
		
	}

	@PostMapping("/delete")
	public ResponseEntity<Boolean> deleteEmployees(@RequestBody Long id[]) {
		if (service.softDelete(id)) {
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} else
			return new ResponseEntity<Boolean>(false, HttpStatus.EXPECTATION_FAILED);
	}

}
