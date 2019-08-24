package com.cms.locations.services;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.locations.beans.RegionBean;
import com.cms.locations.model.Regions;
import com.cms.locations.repositories.RegionsRepo;
import com.google.gson.Gson;

@Service
public class RegionService {

	@Autowired
	RegionsRepo regionsRepo;
	
	public String getAllRegions(){
		JSONObject regionJson = new JSONObject();
		JSONArray array = new JSONArray();
		Gson gson = new Gson();
		List<Regions> regionList = regionsRepo.findAll();
		if(null != regionList && regionList.size() > 0){
		for(Regions region : regionList){
			regionJson = new JSONObject();
			try {
				regionJson = (JSONObject)  new JSONParser().parse(gson.toJson(region,Regions.class));
				array.add(regionJson);
			} catch (ParseException e) {
			}
		}
		regionJson = new JSONObject();
		regionJson.put("status", "Success");
		regionJson.put("message", "Region details");
		regionJson.put("regions", array);
		}else{
			regionJson.put("status", "Success");
			regionJson.put("message", "No records found");	
		}
		return regionJson.toString();
	}
	
	public String getRegionByCode(String regionCode){
		
		JSONObject regionJson = new JSONObject();
		JSONObject json = new JSONObject();
		Gson gson = new Gson();
		Regions region = regionsRepo.findByRegionCode(regionCode);
		if(null != region){
		try {
			regionJson = (JSONObject)  new JSONParser().parse(gson.toJson(region,Regions.class));
		} catch (ParseException e) {
		}
		json.put("status", "Success");
		json.put("message", "Region details");
		json.put("region", regionJson);
		}else{
			json.put("status", "Success");
			json.put("message", "No records found");
		}
		return json.toString();
	}
	
	public String createRegion(RegionBean region){
		JSONObject json = new JSONObject();
		String status = "";
		Regions regionModel = null;
		try{
			if(null != region.getRegionCode()){
			regionModel = regionsRepo.findByRegionCode(region.getRegionCode());
			if(null != regionModel){
				json.put("Status", "Error");
				json.put("message", "Region already available with given regionCode");
			}else{
			regionModel = new Regions();
			//regionModel.setRegionId(1L);
			if(null != region.getDescription())
			regionModel.setDescription(region.getDescription());
			if(null != region.getRegionCode())
			regionModel.setRegionCode(region.getRegionCode());
			if(null != region.getRegionName())
			regionModel.setRegionName(region.getRegionName());
			regionsRepo.save(regionModel);
			json.put("Status", "Success");
			json.put("message", "Region record created successfully");
			}
			}else{
			json.put("Status", "Error");
			json.put("message", "Invalid request");
			}
		}catch(Exception e){
			System.out.println("Error incurred while creating Region record"+e);
			json.put("Status", "Error");
			json.put("message", "Error incurred while creating Region record");
		}
		return json.toString();
	}
	
	public String deleteRegion(String regionCode){
		JSONObject json = new JSONObject();
		Regions regionModel = null;
		try{
			regionModel = regionsRepo.findByRegionCode(regionCode);
			if(null != regionModel){
				regionsRepo.delete(regionModel);
				json.put("Status", "Success");
				json.put("message", "Region record deleted successfully");
			}else{
				json.put("Status", "Error");
				json.put("message", "Region does not exist");
			}
		}catch(Exception e){
			json.put("Status", "Error");
			json.put("message","Error occured while deleting Region");
		}
		return json.toString();
	}
	
	public String updateRegion(RegionBean region){

		JSONObject json = new JSONObject();
		Regions regionModel = null;
		try{
			if(null != region.getRegionCode()){
			regionModel = regionsRepo.findByRegionCode(region.getRegionCode());
			if(null != regionModel){
				if(null != region.getDescription())
				regionModel.setDescription(region.getDescription());
				if(null != region.getRegionName())
				regionModel.setRegionName(region.getRegionName());
					
				regionsRepo.save(regionModel);
				json.put("Status", "Success");
				json.put("message", "Region details updated successfully");
			}else{
				json.put("Status", "Error");
				json.put("message", "Region does not exists");
			}
			}else{
				json.put("Status", "Error");
				json.put("message", "Invalid request");
			}
		}catch(Exception e){
			System.out.println("Error incurred while updating Region record"+e);
			json.put("Status", "Error");
			json.put("message", "Error incurred while updating Region record");
		}
		return json.toString();
	
	}
	
}
