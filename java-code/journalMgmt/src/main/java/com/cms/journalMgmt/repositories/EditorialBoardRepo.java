package com.cms.journalMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.EditorialBoard;

public interface EditorialBoardRepo extends JpaRepository<EditorialBoard, Long> {

	List<EditorialBoard> findAll();
	
	EditorialBoard findByJournalShortName(String journalShortName);
	
}
