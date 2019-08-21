package com.cms.journalMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.Subject;

public interface SubjectRepo extends JpaRepository<Subject, Long> {
	
	List<Subject> findAll();
	
	Subject findBySubjectName(String subjectName);

}
