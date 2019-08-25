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
import org.springframework.web.bind.annotation.RestController;

import com.cms.journalMgmt.beans.AbstractingBean;
import com.cms.journalMgmt.beans.ArticleTypeBean;
import com.cms.journalMgmt.beans.EditorialBoardBean;
import com.cms.journalMgmt.beans.JournalBean;
import com.cms.journalMgmt.beans.SubjectBean;
import com.cms.journalMgmt.services.AbstractingService;
import com.cms.journalMgmt.services.ArticleTypeService;
import com.cms.journalMgmt.services.EditorialBoardService;
import com.cms.journalMgmt.services.JournalAbstractingService;
import com.cms.journalMgmt.services.JournalService;
import com.cms.journalMgmt.services.SubjectService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@Api(value = " Journal Management")
public class JournalController {

	@Autowired
	SubjectService subjectService;
	@Autowired
	JournalService journalService;
	
	@Autowired
	AbstractingService abstractingService;
	
	@Autowired 
	EditorialBoardService ediotrialBoardService;
	
	@Autowired 
	ArticleTypeService articleTypeService;
	
	@Autowired
	JournalAbstractingService journalAbstractingService;
	
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
	
	@ApiOperation(value = " Service to create Abstracting")
	@PostMapping("/abstracting")
	public String createAbstracting(@RequestBody AbstractingBean abstractingBean){
		return abstractingService.createAbstracting(abstractingBean);
	}
	
	@ApiOperation(value = " Service to update Abstracting")
	@PutMapping("/abstracting")
	public String updateAbstracting(@RequestBody AbstractingBean abstractingBean){
		return abstractingService.updateAbstracting(abstractingBean);
	}
	
	@ApiOperation(value = " Service to fetch all Abstracting records")
	@GetMapping("/abstracting")
	public String fetchAllAbstractings(){
		return abstractingService.getAllAbstractings();
	}
	
	@ApiOperation(value = " Service to fetch Abstracting record by abstracting name")
	@GetMapping("/abstracting/{abstractingName}")
	public String fetchAbstractingByName(@PathVariable String abstractingName){
		return abstractingService.getAbstractingByName(abstractingName);
	}
	
	@ApiOperation(value = " Service to delete Abstracting record by abstracting name")
	@DeleteMapping("/abstracting/{abstractingName}")
	public String deleteAbstractingByName(@PathVariable String abstractingName){
		return abstractingService.deleteAbstracting(abstractingName);
	}
	
	@ApiOperation(value = "Service for creating editorial board")
	@PostMapping("/editorialBoard")
	public String createEditorialBoard(@RequestBody EditorialBoardBean editorialBoard){
		return ediotrialBoardService.createOrUpdateEditorialBoard(editorialBoard, "create");
	}
	
	@ApiOperation(value = "Service for updating editorial board")
	@PutMapping("/editorialBoard")
	public String updateEditorialBoard(@RequestBody EditorialBoardBean editorialBoard){
		return ediotrialBoardService.createOrUpdateEditorialBoard(editorialBoard, "update");
	}
	
	@ApiOperation(value = "Service for fetching all editorial boards")
	@GetMapping("/editorialBoard")
	public String getAllEditorialBoards(){
		return ediotrialBoardService.getAllEditorialBoards();
	}
	
	@ApiOperation(value = "Service for fetching editorial board for journal")
	@GetMapping("/editorialBoard/{journalShortName}")
	public String getEditorialBoardForJournalShortName(@PathVariable String journalShortName){
		return ediotrialBoardService.getEditorialBoardByJournalShortName(journalShortName);
	}
	
	@ApiOperation(value = "Service for fetching editorial board by journalShortName and editorId")
	@GetMapping("/editorialBoard/{journalShortName}/{editorId}")
	public String getEditorialBoardForJournalShortNameAndEditorId(@PathVariable String journalShortName,@PathVariable String editorId){
		return ediotrialBoardService.getEditorialBoardByJournalShortNameAndEditorId(journalShortName,editorId);
	}
	
	@ApiOperation(value = "Service for deleting editorial board by journalShortName")
	@DeleteMapping("/editorialBoard/{journalShortName}/{editorId}")
	public String deleteEditorialBoardForJournalShortNameAndEditorId(@PathVariable String journalShortName,@PathVariable String editorId){
		return ediotrialBoardService.deleteEditorialBoardByJournalShortNameAndEditorId(journalShortName,editorId);
	}
	
	@ApiOperation(value = "Service for deleting editorial board by journalShortName and editorId")
	@DeleteMapping("/editorialBoard/{journalShortName}")
	public String deleteEditorialBoardForJournalShortName(@PathVariable String journalShortName){
		return ediotrialBoardService.deleteEditorialBoardByJournalShortName(journalShortName);
	}
	
	@ApiOperation(value="Service to create ArticleType")
	@PostMapping("/articleType")
	public String createArticleType(@RequestBody ArticleTypeBean articleTypeBean){
		return articleTypeService.createorUpdateArticleType(articleTypeBean, "create");
	}
	
	@ApiOperation(value="Service to update ArticleType")
	@PutMapping("/articleType")
	public String updateArticleType(@RequestBody ArticleTypeBean articleTypeBean){
		return articleTypeService.createorUpdateArticleType(articleTypeBean, "update");
	}
	
	@ApiOperation(value="Service to update ArticleType")
	@GetMapping("/articleType")
	public String getAllArticleTypes(){
		return articleTypeService.getAllArticleTypes();
	}
	
	@ApiOperation(value="Service to update ArticleType")
	@GetMapping("/articleType/{articleType}")
	public String getArticleType(@PathVariable String articleType){
		return articleTypeService.getArticleType(articleType);
	}
	
	@ApiOperation(value="Service to update ArticleType")
	@DeleteMapping("/articleType/{articleType}")
	public String deleteArticleType(@PathVariable String articleType){
		return articleTypeService.deleteArticleType(articleType);
	}
	
	@ApiOperation(value="Service to Add or remove abstractings for the journal")
	@PostMapping("/journalAbstracting/{journalShortName}/{abstractingNames}")
	public String assignJournalAbstractings(@PathVariable String journalShortName,String abstractingNames){
		return journalAbstractingService.addOrUpdateJournalAbstracting(journalShortName, abstractingNames);
	}
	
	@ApiOperation(value="Service to fetch abstractings for the journal")
	@GetMapping("/journalAbstracting/{journalShortName}")
	public String getJournalAbstracting(@PathVariable String journalShortName){
		return journalAbstractingService.getJournalAbstractings(journalShortName);
	}
	
	
}
