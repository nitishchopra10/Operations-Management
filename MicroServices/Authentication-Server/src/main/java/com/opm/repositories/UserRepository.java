package com.opm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.opm.models.User;

/**
 * @author tsharma
 *
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	User findByUsernameContainsIgnoreCase(String username);

}
