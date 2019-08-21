package com.cms.journalMgmt.services;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.journalMgmt.beans.SubjectBean;
import com.cms.journalMgmt.model.Subject;
import com.cms.journalMgmt.repositories.SubjectRepo;
import com.google.gson.Gson;

@Service

public class SubjectService {
	
	@Autowired
	SubjectRepo subjectRepo;
	
	public String createSubject(SubjectBean subjectBean){
		
		JSONObject json = new JSONObject();
		Subject subject = null;
		if(null != subjectBean){
			 subject = subjectRepo.findBySubjectName(subjectBean.getSubjectName());
			if(null != subject){
				json.put("status", "Error");
				json.put("message","Subject already exists");
			}else{
				subject = new Subject();
				subject.setSubjectDescription(subjectBean.getSubjectDescription());
				subject.setSubjectName(subjectBean.getSubjectName());
				subjectRepo.save(subject);
				json.put("status", "Success");
				json.put("message","Subject Saved successfully");
			}
		}else{
			json.put("status", "Error");
			json.put("message","Invalid Request");
		}
		
		return json.toString();
	}
	
	public String updateSubject(SubjectBean subjectBean){
		
		JSONObject json = new JSONObject();
		Subject subject = null;
		if(null != subjectBean){
			 subject = subjectRepo.findBySubjectName(subjectBean.getSubjectName());
			if(null != subject){
				subject.setSubjectDescription(subjectBean.getSubjectDescription());
				subject.setSubjectName(subjectBean.getSubjectName());
				subjectRepo.save(subject);
				json.put("status", "Success");
				json.put("message","Subject updated successfully");	
			}else{
				json.put("status", "Error");
				json.put("message","Subject does not exists");
				
			}
		}else{
			json.put("status", "Error");
			json.put("message","Invalid Request");
		}
		
		return json.toString();
	}

	public String getAllSubjects(){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		
		List<Subject> subjects = subjectRepo.findAll();
		
		if(null != subjects && subjects.size() > 0){
			for(Subject subject : subjects){
				json = new JSONObject();
				json.put("subjectName", subject.getSubjectName());
				json.put("subjectDescription",subject.getSubjectDescription());
				array.add(json);
			}
		}
		json = new JSONObject();
		json.put("subjects", array);
		json.put("status","Success");
		json.put("message"," Subject details fetched successfully");
		return json.toString();
	}
	
	public String getSubjectByName(String subjectName){
		JSONObject json = new JSONObject();
		
		Subject subject = subjectRepo.findBySubjectName(subjectName);
		if(null != subject){
			json = new JSONObject();
			json.put("subjectName", subject.getSubjectName());
			json.put("subjectDescription",subject.getSubjectDescription());
			json.put("status","Success");
			json.put("message"," Subject details fetched successfully");
		}else{
			json.put("status", "Error");
			json.put("message","Subject does not exists");
		}
		return json.toString();
	}
	
	public String deleteSubject(String subjectName){
		JSONObject json = new JSONObject();
		Subject subject = subjectRepo.findBySubjectName(subjectName);
		if(null != subject){
			subjectRepo.delete(subject);
			json.put("status","Success");
			json.put("message"," Subject deleted successfully");
		}else{
			json.put("status", "Error");
			json.put("message","Subject does not exists");
		}
		return json.toString();
	}

}
