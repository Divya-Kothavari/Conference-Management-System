package com.cms.journalMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.JournalAbstracting;

public interface JournalAbstractingRepo extends JpaRepository<JournalAbstracting, Long> {

	List<JournalAbstracting> findAll();
	
	List<JournalAbstracting> findByJournalShortName(String journalShortName);
	
	JournalAbstracting findByJournalShortNameAndAbstractingName(String journalShortName,String abstractingName);
}
