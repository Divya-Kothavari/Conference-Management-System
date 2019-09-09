package com.cms.journalMgmt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.JournalLogo;

public interface JournalLogoRepo extends JpaRepository<JournalLogo, Long> {

	JournalLogo findByJournalShortName(String journalShortName);
}
