package com.cms.locations.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.locations.model.Regions;

public interface RegionsRepo extends JpaRepository<Regions, Long> {
	
	Regions findByRegionCode(String regionCode);
	
	List<Regions> findAll();

}
