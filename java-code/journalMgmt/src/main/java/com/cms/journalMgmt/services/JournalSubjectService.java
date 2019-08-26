package com.cms.journalMgmt.services;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.journalMgmt.model.JournalSubject;
import com.cms.journalMgmt.repositories.JournalSubjectRepo;
import com.google.gson.Gson;

@Service
public class JournalSubjectService {

	@Autowired
	JournalSubjectRepo journalSubjectRepo;
	
	public String addOrUpdateSubjectToJournal(String journalShortName,String subjectNameList){
		
		JSONObject json = new JSONObject();
		JournalSubject journalSubject = new JournalSubject();
		if(null != journalShortName){
		List<JournalSubject> journalSubjectList = journalSubjectRepo.findByJournalShortName(journalShortName);
		if(null != journalSubjectList && journalSubjectList.size() > 0){
			journalSubjectRepo.deleteInBatch(journalSubjectList);
		}
		if(null != subjectNameList){
			String[] subjectArray = subjectNameList.split(",");
			journalSubjectList = new ArrayList<>();
			for(String subject : subjectArray){
				journalSubject = new JournalSubject();
				journalSubject.setJournalShortName(journalShortName);
				journalSubject.setSubjectName(subject);
				journalSubjectList.add(journalSubject);
			}
			journalSubjectRepo.saveAll(journalSubjectList);
			json.put("status", "Success");
			json.put("message", "Journal Subjects updated successfully");
		}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	public String getJournalSubjects(String journalShortName){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		Gson gson = new Gson();
		if(null != journalShortName){
		List<JournalSubject> journalSubjectList = journalSubjectRepo.findByJournalShortName(journalShortName);
		if(null != journalSubjectList && journalSubjectList.size() > 0){
			for(JournalSubject jSubject : journalSubjectList){
				json = new JSONObject();
				try{
					json = (JSONObject)  new JSONParser().parse(gson.toJson(jSubject,JournalSubject.class));
					array.add(json);
				}catch(Exception e){}
			}
			json = new JSONObject();
			json.put("status", "Success");
			json.put("message", "JournalSubject details fetched successfully");
			json.put("journalSubjects", array);
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
	
	public String getSubjectJournals(String subjectName){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		Gson gson = new Gson();
		if(null != subjectName){
		List<JournalSubject> journalSubjectList = journalSubjectRepo.findBySubjectName(subjectName);
		if(null != journalSubjectList && journalSubjectList.size() > 0){
			for(JournalSubject jSubject : journalSubjectList){
				json = new JSONObject();
				try{
					json = (JSONObject)  new JSONParser().parse(gson.toJson(jSubject,JournalSubject.class));
					array.add(json);
				}catch(Exception e){}
			}
			json = new JSONObject();
			json.put("status", "Success");
			json.put("message", "Subject Journal details fetched successfully");
			json.put("journalSubjects", array);
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
