package com.cms.journalMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.JournalSubject;

public interface JournalSubjectRepo extends JpaRepository<JournalSubject, Long> {
	
	List<JournalSubject> findAll();
	
	List<JournalSubject> findByJournalShortName(String journalShortName);
	
	List<JournalSubject> findBySubjectName(String subjectName);
	
	JournalSubject findByJournalShortNameAndSubjectName(String journalShortName,String subjectName);

}
