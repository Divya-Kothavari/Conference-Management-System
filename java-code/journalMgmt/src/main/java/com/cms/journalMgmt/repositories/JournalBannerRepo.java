package com.cms.journalMgmt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.JournalBanner;

public interface JournalBannerRepo extends JpaRepository<JournalBanner, Long> {

	JournalBanner findByJournalShortName(String journalShortName);
	
}
