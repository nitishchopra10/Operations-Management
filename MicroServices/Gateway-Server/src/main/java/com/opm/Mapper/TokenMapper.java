package com.opm.Mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.opm.dto.TokenStoreDTO;
import com.opm.models.TokenStore;

/**
 * @author tsharma
 *
 */
@Mapper(componentModel = "spring")
public interface TokenMapper {
	TokenMapper INSTANCE = Mappers.getMapper(TokenMapper.class);

	TokenStore tokenStoreDTOToTokenStore(TokenStoreDTO tokenDTO);

	TokenStoreDTO tokenStoreToTokenStoreDTO(TokenStore token);

}
