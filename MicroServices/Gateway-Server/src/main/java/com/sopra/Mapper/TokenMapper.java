package com.sopra.Mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.sopra.dto.TokenStoreDTO;
import com.sopra.models.TokenStore;

/**
 * @author tsharma
 *
 */
@Mapper(componentModel="spring")
public interface TokenMapper {
	TokenMapper INSTANCE = Mappers.getMapper(TokenMapper.class);
	
	TokenStore tokenStoreDTOToTokenStore(TokenStoreDTO tokenDTO); 

	TokenStoreDTO tokenStoreToTokenStoreDTO(TokenStore token); 

}
