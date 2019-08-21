package com.cms.journalMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.Abstracting;

public interface AbstractingRepo extends JpaRepository<Abstracting, Long> {

	List<Abstracting> findAll();
	
	Abstracting findByAbstractingName(String abstractingName);
}
