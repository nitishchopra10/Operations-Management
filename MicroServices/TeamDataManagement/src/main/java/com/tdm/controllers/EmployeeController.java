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


@RestController("/tdm")
public class EmployeeController {

	@Autowired
	private EmployeeServiceImpl service;
	
	@GetMapping("/all")
	public List<EmployeeDTO> showAll(){
		
		return service.getAllEmployees();
	
	}
	
	@PostMapping("/add")
	public ResponseEntity<EmployeeDTO> addEmployee(@RequestBody EmployeeDTO emp){
		
		if(service.add(emp)) {
			return new ResponseEntity<>(HttpStatus.CREATED);
		}
		else
		return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED) ;		
	}
	
	@PostMapping("/update")
	public ResponseEntity<EmployeeDTO> updateEmployee(@RequestBody EmployeeDTO emp){
		if(service.update(emp)) {
			return new ResponseEntity<EmployeeDTO>(emp,HttpStatus.OK);
		}
		else
			return new ResponseEntity<EmployeeDTO>(HttpStatus.EXPECTATION_FAILED);
	}
	
	@GetMapping("/search/id/{id}")
	public List<EmployeeDTO> searchEmployee(@PathVariable Long id){
		List<EmployeeDTO> emp = new ArrayList<EmployeeDTO>();
		emp.add(service.searchById(id));
		return emp;
	}
	
	@GetMapping("/search/name/{name}")
	public List<EmployeeDTO> searchEmployeeByName(@PathVariable String name){
		List<EmployeeDTO> emp = service.searchByName(name);
		if(emp != null) {
			return emp;
		}
		else 
			return  null;
	}
	
}
