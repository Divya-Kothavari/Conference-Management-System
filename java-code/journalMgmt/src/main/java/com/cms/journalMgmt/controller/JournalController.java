package com.cms.journalMgmt.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.journalMgmt.beans.JournalBean;
import com.cms.journalMgmt.beans.SubjectBean;
import com.cms.journalMgmt.services.JournalService;
import com.cms.journalMgmt.services.SubjectService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/journals")
@Api(value = " Journal Management")
public class JournalController {

	@Autowired
	SubjectService subjectService;
	@Autowired
	JournalService journalService;
	
	@ApiOperation(value = " Sample test service to check health check")
	@GetMapping("/test")
	public String testService(){
		return " Application is running at "+new Date();
	}
	
	
	@ApiOperation(value = " Service to create Journal")
	@PostMapping("/journal")
	public String createJournal(@RequestBody JournalBean journal){
		return journalService.createJournal(journal);
	}
	
	@ApiOperation(value = " Service to update Journal")
	@PutMapping("/journal")
	public String updateJournal(@RequestBody JournalBean journal){
		return journalService.updateJournal(journal);
	}
	
	@ApiOperation(value = " Service to fetch Journal by Journal short name")
	@GetMapping("/journal/{journalShortName}")
	public String getJournal(@PathVariable String journalShortName){
		return journalService.getJournalByShortName(journalShortName);
	}
	
	@ApiOperation(value = " Service to delete Journal by Journal short name")
	@DeleteMapping("/journal/{journalShortName}")
	public String deleteJournal(@PathVariable String journalShortName){
		return journalService.deleteJournal(journalShortName);
	}
	
	@ApiOperation(value = " Service to fetch all subjects")
	@GetMapping("/subject")
	public String getAllSubjects(){
		return subjectService.getAllSubjects();
	}
	
	@ApiOperation(value = " Service to fetch subject by name")
	@GetMapping("/subject/{subjectName}")
	public String getSubjectByName(@PathVariable String subjectName){
		return subjectService.getSubjectByName(subjectName);
	}
	
	@ApiOperation(value = " Service to create subject")
	@PostMapping("/subject")
	public String createSubject(@RequestBody SubjectBean subject){
		return subjectService.createSubject(subject);
	}
	
	@ApiOperation(value = " Service to update subject")
	@PutMapping("/subject")
	public String updateSubject(@RequestBody SubjectBean subject){
		return subjectService.updateSubject(subject);
	}
	
	@ApiOperation(value = " Service to delete subject")
	@DeleteMapping("/subject/{subjectName}")
	public String deleteSubject(@PathVariable String subjectName){
		return subjectService.deleteSubject(subjectName);
	}
	
}
