package com.cms.journalMgmt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.JournalFlyer;

public interface JournalFlyerRepo extends JpaRepository<JournalFlyer, Long> {

	JournalFlyer findByJournalShortName(String journalShortName);
}
