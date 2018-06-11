package com.opm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.opm.models.TokenStore;

/**
 * @author tsharma
 *
 */
@Repository
public interface TokenStoreRepository extends JpaRepository<TokenStore, Integer> {
	TokenStore findByToken(String token);
}
