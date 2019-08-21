package com.cms.locations.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.locations.model.Country;

public interface CountryRepo extends JpaRepository<Country, Long> {

	List<Country> findByRegionCode(String regionCode);
	
	List<Country> findAll();
	
	Country findByCountryCode(String countryCode);
}
