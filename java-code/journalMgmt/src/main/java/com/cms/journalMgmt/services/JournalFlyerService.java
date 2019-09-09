package com.cms.journalMgmt.services;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cms.journalMgmt.model.JournalFlyer;
import com.cms.journalMgmt.model.JournalLogo;
import com.cms.journalMgmt.repositories.JournalFlyerRepo;
import com.cms.journalMgmt.repositories.JournalLogoRepo;

@Service
public class JournalFlyerService {

	
	@Autowired
	JournalFlyerRepo journalFlyerRepo;
	
	public String uploadJournalFlyer(MultipartFile file, String journalShortName){
		
		JSONObject json = new JSONObject();
		
		JournalFlyer journalFlyer = journalFlyerRepo.findByJournalShortName(journalShortName);
		if(null != journalFlyer){
			journalFlyerRepo.delete(journalFlyer);
		}
		journalFlyer = new JournalFlyer();
		try{
			journalFlyer.setFileName(file.getOriginalFilename());
			journalFlyer.setJournalFlyerData(file.getBytes());
			journalFlyer.setJournalShortName(journalShortName);
			journalFlyerRepo.save(journalFlyer);
		json.put("status", "Success");
		json.put("message", "Journal Flyer uploaded successfully");
		
		}catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while uploading journal Logo");
		}
		
		return json.toString();
	}
	
	public byte[] getJournalFlyer(String journalShortName){
		byte[] journalFlyerData = null;
		try{
			JournalFlyer journalFlyer = journalFlyerRepo.findByJournalShortName(journalShortName);
		if(null != journalFlyer){
			journalFlyerData = journalFlyer.getJournalFlyerData();
		}
		}catch(Exception e){
			
		}
		return journalFlyerData;
	}
	
	public String getJournalFlyerData(String journalShortName){
		byte[] journalLogoData = null;
		JSONObject json = new JSONObject();
		JournalFlyer journalFlyer = journalFlyerRepo.findByJournalShortName(journalShortName);
		try{
		if(null != journalFlyer){
			journalLogoData = journalFlyer.getJournalFlyerData();
			json.put("status", "Success");
			json.put("message", "Journal Logo fetched successfully");
			json.put("journalPDFData", new String(journalLogoData));
		}else{
			json.put("status", "Error");
			json.put("message", "journal Flyer does not exists");
		}
		}catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while fetching journal PDF data");
		}
		return json.toString();
	}
	
	public String deleteJournalFlyer(String journalShortName){
		
		JSONObject json = new JSONObject();
		JournalFlyer journalFlyer = journalFlyerRepo.findByJournalShortName(journalShortName);
		if(null != journalFlyer){
			journalFlyerRepo.delete(journalFlyer);
			json.put("status", "Success");
			json.put("message", "Journal Flyer deleted successfully");
		}else{
			json.put("status", "Error");
			json.put("message", "journal Flyer does not exists");
		}
		return json.toString();
	}


}
