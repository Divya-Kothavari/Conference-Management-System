package com.cms.journalMgmt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.JournalPDF;

public interface JournalPDFRepo extends JpaRepository<JournalPDF, Long> {
	
	JournalPDF findByJournalShortName(String journalShortName);

}
