package com.cms.locations.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.locations.model.State;

public interface StateRepo extends JpaRepository<State, Long> {
	
	State findByStateCode(String stateCode);
	
	List<State> findByCountryCode(String countryCode);
	
	List<State> findAll();

}
