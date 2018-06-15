package com.tdm.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.tdm.dto.AssetsDTO;
import com.tdm.dto.EmployeeDTO;
import com.tdm.models.Assets;
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
	
	AssetsDTO assetsToAssetsDTO(Assets asset);
	
	Assets assetsDTOToAssets(AssetsDTO assetsDTO);
	
	List<EmployeeDTO> employeeListToEmployeeDTOList(List<Employee> employeeList);

	List<Employee> employeeDTOListToEmployeeList(List<EmployeeDTO> employeeDTOList);

}
