package com.sopra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sopra.models.TokenStore;

/**
 * @author tsharma
 *
 */
@Repository
public interface TokenStoreRepository extends JpaRepository<TokenStore, Integer> {
	TokenStore findByToken(String token);
}
