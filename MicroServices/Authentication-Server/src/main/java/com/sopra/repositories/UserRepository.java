package com.sopra.repositories;

import org.springframework.stereotype.Repository;

import com.sopra.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	
	User findByUsernameContainsIgnoreCase(String username);

}
