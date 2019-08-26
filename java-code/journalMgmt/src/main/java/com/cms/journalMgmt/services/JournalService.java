package com.cms.journalMgmt.services;

import java.util.Date;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.journalMgmt.beans.JournalBean;
import com.cms.journalMgmt.model.Journal;
import com.cms.journalMgmt.repositories.JournalRepo;
import com.google.gson.Gson;

@Service
public class JournalService {
	
	@Autowired
	JournalRepo journalRepo;
	
	public String createJournal(JournalBean journal){
		
		JSONObject json = new JSONObject();
		
		if(null != journal && null != journal.getJournalShortName()){
			Journal journalModel = journalRepo.findByJournalShortName(journal.getJournalShortName());
			if(null != journalModel){
				json.put("status", "Error");
				json.put("message","Journal Already exists");
			}else{
				journalModel = new Journal();
				if(null != journal.getJournalName()){
					journalModel.setJournalName(journal.getJournalName());
				}
				if(null != journal.getJournalShortName()){
					journalModel.setJournalShortName(journal.getJournalShortName());
				}
				if(null != journal.getJournalEmail()){
					journalModel.setJournalEmail(journal.getJournalEmail());
				}
				if(null != journal.getIssnNumber()){
					journalModel.setIssnNumber(journal.getIssnNumber());
				}
				if(null != journal.getIspnNumber()){
					journalModel.setIspnNumber(journal.getIspnNumber());
				}
				if(null != journal.getAboutJournal()){
					journalModel.setAboutJournal(journal.getAboutJournal());
				}
				if(null != journal.getAimAndScope()){
					journalModel.setAimAndScope(journal.getAimAndScope());
				}
				if(null != journal.getArticleInPressText()){
					journalModel.setArticleInPressText(journal.getArticleInPressText());
				}
				if(null != journal.getCurrentIssueText()){
					journalModel.setCurrentIssueText(journal.getCurrentIssueText());
				}
				if(null != journal.getArchievePageText()){
					journalModel.setArchievePageText(journal.getArchievePageText());
				}
				if(null != journal.getGuidlines()){
					journalModel.setGuidlines(journal.getGuidlines());
				}
				if(null != journal.getArticleProcessingCharge()){
					journalModel.setArticleProcessingCharge(journal.getArticleProcessingCharge());
				}
				if(null != journal.getJournalBanner()){
					journalModel.setJournalBanner(journal.getJournalBanner());
				}
				if(null != journal.getJournalFlier()){
					journalModel.setJournalFlier(journal.getJournalFlier());
				}
				if(null != journal.getJournalPDF()){
					journalModel.setJournalPDF(journal.getJournalPDF());
				}
				if(null != journal.getFbLink()){
					journalModel.setFbLink(journal.getFbLink());
				}
				if(null != journal.getTwitterLink()){
					journalModel.setTwitterLink(journal.getTwitterLink());
				}
				if(null != journal.getLinkedinLink()){
					journalModel.setLinkedinLink(journal.getLinkedinLink());
				}
				if(null != journal.getJournalPrimaryAdmin()){
					journalModel.setJournalPrimaryAdmin(journal.getJournalPrimaryAdmin());
				}
				if(null != journal.getJournalSecondaryAdmin()){
					journalModel.setJournalSecondaryAdmin(journal.getJournalSecondaryAdmin());
				}
				if(null != journal.getReviewStatus()){
					journalModel.setReviewStatus(journal.getReviewStatus());
				}
				if(null != journal.getJournalStatus()){
					journalModel.setJournalStatus(journal.getJournalStatus());
				}
				journalModel.setJournalCreatedDate(new Date());
				journalModel.setJournalUpdatedDate(new Date());
				
				journalRepo.save(journalModel);
				json.put("status", "Success");
				json.put("message","Journal Created Successfully");
			}
			
		}else{
			json.put("status", "Error");
			json.put("message","Invalid request");
		}
		return json.toString();
	}
	
public String updateJournal(JournalBean journal){
		
		JSONObject json = new JSONObject();
		
		if(null != journal && null != journal.getJournalShortName()){
			Journal journalModel = journalRepo.findByJournalShortName(journal.getJournalShortName());
			if(null != journalModel){
				if(null != journal.getJournalName()){
					journalModel.setJournalName(journal.getJournalName());
				}
				if(null != journal.getJournalShortName()){
					journalModel.setJournalShortName(journal.getJournalShortName());
				}
				if(null != journal.getJournalEmail()){
					journalModel.setJournalEmail(journal.getJournalEmail());
				}
				if(null != journal.getIssnNumber()){
					journalModel.setIssnNumber(journal.getIssnNumber());
				}
				if(null != journal.getIspnNumber()){
					journalModel.setIspnNumber(journal.getIspnNumber());
				}
				if(null != journal.getAboutJournal()){
					journalModel.setAboutJournal(journal.getAboutJournal());
				}
				if(null != journal.getAimAndScope()){
					journalModel.setAimAndScope(journal.getAimAndScope());
				}
				if(null != journal.getArticleInPressText()){
					journalModel.setArticleInPressText(journal.getArticleInPressText());
				}
				if(null != journal.getCurrentIssueText()){
					journalModel.setCurrentIssueText(journal.getCurrentIssueText());
				}
				if(null != journal.getArchievePageText()){
					journalModel.setArchievePageText(journal.getArchievePageText());
				}
				if(null != journal.getGuidlines()){
					journalModel.setGuidlines(journal.getGuidlines());
				}
				if(null != journal.getArticleProcessingCharge()){
					journalModel.setArticleProcessingCharge(journal.getArticleProcessingCharge());
				}
				if(null != journal.getJournalBanner()){
					journalModel.setJournalBanner(journal.getJournalBanner());
				}
				if(null != journal.getJournalFlier()){
					journalModel.setJournalFlier(journal.getJournalFlier());
				}
				if(null != journal.getJournalPDF()){
					journalModel.setJournalPDF(journal.getJournalPDF());
				}
				if(null != journal.getFbLink()){
					journalModel.setFbLink(journal.getFbLink());
				}
				if(null != journal.getTwitterLink()){
					journalModel.setTwitterLink(journal.getTwitterLink());
				}
				if(null != journal.getLinkedinLink()){
					journalModel.setLinkedinLink(journal.getLinkedinLink());
				}
				if(null != journal.getJournalPrimaryAdmin()){
					journalModel.setJournalPrimaryAdmin(journal.getJournalPrimaryAdmin());
				}
				if(null != journal.getJournalSecondaryAdmin()){
					journalModel.setJournalSecondaryAdmin(journal.getJournalSecondaryAdmin());
				}
				if(null != journal.getReviewStatus()){
					journalModel.setReviewStatus(journal.getReviewStatus());
				}
				if(null != journal.getJournalStatus()){
					journalModel.setJournalStatus(journal.getJournalStatus());
				}
				journalModel.setJournalCreatedDate(new Date());
				journalModel.setJournalUpdatedDate(new Date());
				
				journalRepo.save(journalModel);
				json.put("status", "Success");
				json.put("message","Journal updated Successfully");
			
			}else{
				json.put("status", "Error");
				json.put("message","Journal does not exist");
			}
			
		}else{
			json.put("status", "Error");
			json.put("message","Invalid request");
		}
		return json.toString();
	}

	public String getAllJournals(){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		List<Journal> journalModels = journalRepo.findAll();
		if(null != journalModels && journalModels.size() > 0){
			Gson gson = new Gson();
			for(Journal journalModel : journalModels){
			 json = new JSONObject();
			 try {
			 json = (JSONObject)  new JSONParser().parse(gson.toJson(journalModel,Journal.class));
			 array.add(json);
			 } catch (ParseException e){}
			}
			json = new JSONObject();
			json.put("status", "Success");
			json.put("message","Journal details fetched successfully");
			json.put("journals", array);
		}else{
			json.put("status", "Error");
			json.put("message","No Data found");
		}
		return json.toString();
	}
	
	public String getJournalByShortName(String journalShortName){
		
		JSONObject json = new JSONObject();
		JSONObject journalJson = new JSONObject();
		if(null != journalShortName){
			Journal journalModel = journalRepo.findByJournalShortName(journalShortName);
			if(null != journalModel){
				Gson gson = new Gson();
				try {
					journalJson = (JSONObject)  new JSONParser().parse(gson.toJson(journalModel,Journal.class));
					json.put("journal", journalJson);
					json.put("status", "Success");
					json.put("message","Journal response");
				} catch (ParseException e) {
					json.put("status", "Error");
					json.put("message","Error while parsing the journal response");
				}
			}else{
				json.put("status", "Error");
				json.put("message","No records found");
			}
		}else{
			json.put("status", "Error");
			json.put("message","Invalid request");
		}
		return json.toString();
	}

	
	public String deleteJournal(String journalShortName){
	
		JSONObject json = new JSONObject();
		if(null != journalShortName){
			Journal journalModel = journalRepo.findByJournalShortName(journalShortName);
			if(null != journalModel){
				journalRepo.delete(journalModel);
				json.put("status", "Success");
				json.put("message","Journal deleted successfully");
				
			}else{
				json.put("status", "Error");
				json.put("message","Journal doesnot exist");
			}
		}else{
			json.put("status", "Error");
			json.put("message","Invalid request");
		}
		return json.toString();
	}
}
