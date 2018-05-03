package com.tdm.mappers;

import com.tdm.dto.EmployeeDTO;
import com.tdm.models.Employee;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2018-05-03T09:41:20+0530",
    comments = "version: 1.1.0.Final, compiler: javac, environment: Java 1.8.0_161 (Oracle Corporation)"
)
@Component
public class EmployeeMapperImpl implements EmployeeMapper {

    @Override
    public EmployeeDTO employeeToEmployeeDTO(Employee entity) {
        if ( entity == null ) {
            return null;
        }

        EmployeeDTO employeeDTO = new EmployeeDTO();

        employeeDTO.setEmpId( entity.getEmpId() );
        employeeDTO.setName( entity.getName() );
        employeeDTO.setmCode( entity.getmCode() );
        employeeDTO.setContactNumber( entity.getContactNumber() );
        employeeDTO.setProject( entity.getProject() );
        employeeDTO.setAddress( entity.getAddress() );
        employeeDTO.setSubLevel( entity.getSubLevel() );
        employeeDTO.setN1( entity.getN1() );
        employeeDTO.setN2( entity.getN2() );

        return employeeDTO;
    }

    @Override
    public Employee employeeDTOToEmployee(EmployeeDTO entity) {
        if ( entity == null ) {
            return null;
        }

        Employee employee = new Employee();

        employee.setEmpId( entity.getEmpId() );
        employee.setName( entity.getName() );
        employee.setmCode( entity.getmCode() );
        employee.setContactNumber( entity.getContactNumber() );
        employee.setProject( entity.getProject() );
        employee.setAddress( entity.getAddress() );
        employee.setSubLevel( entity.getSubLevel() );
        employee.setN1( entity.getN1() );
        employee.setN2( entity.getN2() );

        return employee;
    }

    @Override
    public List<EmployeeDTO> employeeListToEmployeeDTOList(List<Employee> employeeList) {
        if ( employeeList == null ) {
            return null;
        }

        List<EmployeeDTO> list = new ArrayList<EmployeeDTO>();
        for ( Employee employee : employeeList ) {
            list.add( employeeToEmployeeDTO( employee ) );
        }

        return list;
    }

    @Override
    public List<Employee> employeeDTOListToEmployeeList(List<EmployeeDTO> employeeDTOList) {
        if ( employeeDTOList == null ) {
            return null;
        }

        List<Employee> list = new ArrayList<Employee>();
        for ( EmployeeDTO employeeDTO : employeeDTOList ) {
            list.add( employeeDTOToEmployee( employeeDTO ) );
        }

        return list;
    }
}
