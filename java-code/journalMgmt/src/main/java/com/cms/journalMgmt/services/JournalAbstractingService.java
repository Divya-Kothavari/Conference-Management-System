package com.cms.journalMgmt.services;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.journalMgmt.model.JournalAbstracting;
import com.cms.journalMgmt.repositories.JournalAbstractingRepo;
import com.google.gson.Gson;

@Service
public class JournalAbstractingService {
	
	@Autowired
	JournalAbstractingRepo journalAbstractingRepo;
	
	public String addOrUpdateJournalAbstracting(String journalShortName,String abstractingNames){
		JSONObject json = new JSONObject();
		if(null != journalShortName){
		List<JournalAbstracting> journalAbstractingList = journalAbstractingRepo.findByJournalShortName(journalShortName);
		if(null != journalAbstractingList && journalAbstractingList.size() > 0){
			journalAbstractingRepo.deleteInBatch(journalAbstractingList);
		}
		if(null != abstractingNames){
			String[] abstractingNamesArray = abstractingNames.split(",");
			journalAbstractingList = new ArrayList<>();
			for(String abstractingName : abstractingNamesArray){
				JournalAbstracting journalAbstracting = new JournalAbstracting();
				journalAbstracting.setAbstractingName(abstractingName);
				journalAbstracting.setJournalShortName(journalShortName);
				journalAbstractingList.add(journalAbstracting);
			}
			journalAbstractingRepo.saveAll(journalAbstractingList);
			json.put("status", "Success");
			json.put("message", "Journal Abstractings updated successfully");
		}
		
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	public String getJournalAbstractings(String journalShortName){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		Gson gson = new Gson();
		if(null != journalShortName){
			List<JournalAbstracting> journalAbstractingList = journalAbstractingRepo.findByJournalShortName(journalShortName);
			if(null != journalAbstractingList && journalAbstractingList.size() > 0){
				for(JournalAbstracting journalAbstracting : journalAbstractingList){
					json = new JSONObject();
					//jsonStr = (JSONObject)  new JSONParser().parse(gson.toJson(editorialBoard,EditorialBoard.class));
					try{
					json = (JSONObject)  new JSONParser().parse(gson.toJson(journalAbstracting,JournalAbstracting.class));
					array.add(json);
					}catch(Exception e){}
				}
				json = new JSONObject();
				json.put("status", "Success");
				json.put("message", "Journal abstracting details fetched successfully");
				json.put("journalAbstractings", array);
				
			}else{
				json.put("status", "Error");
				json.put("message", "No data found");
			}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}

}
