/*


@author: tsharma

*/
package com.tdm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tdm.models.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	 List<Employee> findByStatusNot(Boolean status);
	 
	 List<Employee> findByAccountIgnoreCase(String account);
}
