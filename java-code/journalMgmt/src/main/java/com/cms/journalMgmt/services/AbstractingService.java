package com.cms.journalMgmt.services;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.journalMgmt.beans.AbstractingBean;
import com.cms.journalMgmt.model.Abstracting;
import com.cms.journalMgmt.model.Journal;
import com.cms.journalMgmt.repositories.AbstractingRepo;
import com.google.gson.Gson;

@Service
public class AbstractingService {
	
	@Autowired
	AbstractingRepo abstractingRepo;
	
	public String createAbstracting(AbstractingBean abstracting){
		JSONObject json = new JSONObject();
		if(null != abstracting && null != abstracting.getAbstractingName()){
			Abstracting abstractingModel = abstractingRepo.findByAbstractingName(abstracting.getAbstractingName());
			if(null != abstractingModel){
				json.put("status","Error");
				json.put("message", "Abstracting already available");
			}else{
				abstractingModel = new Abstracting();
				abstractingModel.setAbstractingName(abstracting.getAbstractingName());
				if(null != abstracting.getAbstractingLogo())
				abstractingModel.setAbstractingLogo(abstracting.getAbstractingLogo());
				if(null != abstracting.getAbstractingLogo())
				abstractingModel.setAbstractingUrl(abstracting.getAbstractingUrl());
				abstractingRepo.save(abstractingModel);
				json.put("status","Success");
				json.put("message", "Abstracting created successfully");
			}
		}else{
			json.put("status","Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	public String updateAbstracting(AbstractingBean abstracting){
		JSONObject json = new JSONObject();
		if(null != abstracting && null != abstracting.getAbstractingName()){
			Abstracting abstractingModel = abstractingRepo.findByAbstractingName(abstracting.getAbstractingName());
			if(null != abstractingModel){
				abstractingModel.setAbstractingName(abstracting.getAbstractingName());
				if(null != abstracting.getAbstractingLogo())
				abstractingModel.setAbstractingLogo(abstracting.getAbstractingLogo());
				if(null != abstracting.getAbstractingLogo())
				abstractingModel.setAbstractingUrl(abstracting.getAbstractingUrl());
				abstractingRepo.save(abstractingModel);
				json.put("status","Success");
				json.put("message", "Abstracting updated successfully");
			}else{
				json.put("status","Error");
				json.put("message", "Abstracting not available");				
			}
		}else{
			json.put("status","Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	public String getAllAbstractings(){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		Gson gson = new Gson();
		List<Abstracting> abstractingList = abstractingRepo.findAll();
		if(null != abstractingList && abstractingList.size() > 0){
			for(Abstracting abstractingModel : abstractingList){
				json = new JSONObject();
				try{
				json = (JSONObject)  new JSONParser().parse(gson.toJson(abstractingModel,Abstracting.class));
				array.add(json);
				}catch(Exception e){}
			}
			json = new JSONObject();
			json.put("status", "Success");
			json.put("message", "All Abstracting details");
			json.put("abstractings", array);
		}else{
			json.put("status","Error");
			json.put("message", "No Data found");
		}
		return json.toString();
	}
	
	public String getAbstractingByName(String abstractingName){
		JSONObject json = new JSONObject();
		Gson gson = new Gson();
		if(null != abstractingName){
		Abstracting abstractingModel = abstractingRepo.findByAbstractingName(abstractingName);
		if(null != abstractingModel){
			try{
			json = (JSONObject)  new JSONParser().parse(gson.toJson(abstractingModel,Abstracting.class));
			json.put("status", "Success");
			json.put("message", "Abstracting Details ");
			}catch(Exception e){
				json.put("status","Error");
				json.put("message", "Error while fetching Abstracting");	
			}
		}else{
			json.put("status","Error");
			json.put("message", "Abstracting not available");	
		}
		}else{
			json.put("status","Error");
			json.put("message", "Invalid request");	
		}
		return json.toString();
	}
	
	public String deleteAbstracting(String abstractingName){
		JSONObject json = new JSONObject();
		if(null != abstractingName){
			Abstracting abstractingModel = abstractingRepo.findByAbstractingName(abstractingName);
			if(null != abstractingModel){
				abstractingRepo.delete(abstractingModel);
				json.put("status","Success");
				json.put("message", "Abstracting deleted successfully");	
			}else{
				json.put("status","Error");
				json.put("message", "Abstracting not available to delete");	
			}
		}else{
			json.put("status","Error");
			json.put("message", "Invalid request");	
		}
		return json.toString();
	}
	

}
