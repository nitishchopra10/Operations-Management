package com.tdm.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.tdm.dto.EmployeeDTO;
import com.tdm.models.Employee;

/**
 * @author tsharma
 *
 */
@Mapper(componentModel="spring")
public interface EmployeeMapper {

	EmployeeMapper INSTANCE = Mappers.getMapper(EmployeeMapper.class);
	
	EmployeeDTO employeeToEmployeeDTO(Employee entity);
	
	Employee employeeDTOToEmployee(EmployeeDTO entity);
	
	List<EmployeeDTO> employeeListToEmployeeDTOList(List<Employee> employeeList);

	List<Employee> employeeDTOListToEmployeeList(List<EmployeeDTO> employeeDTOList);

}
