package com.cms.journalMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.Journal;

public interface JournalRepo extends JpaRepository<Journal, Long> {

	
	List<Journal> findAll();
	
	Journal findByJournalShortName(String journalShortName);
}
