package com.cms.journalMgmt.services;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cms.journalMgmt.model.JournalLogo;
import com.cms.journalMgmt.model.JournalPDF;
import com.cms.journalMgmt.repositories.JournalLogoRepo;

@Service
public class JournalLogoService {

	@Autowired
	JournalLogoRepo journalLogoRepo;
	
	public String uploadJournalLogo(MultipartFile file, String journalShortName){
		
		JSONObject json = new JSONObject();
		
		JournalLogo journalLogo = journalLogoRepo.findByJournalShortName(journalShortName);
		if(null != journalLogo){
			journalLogoRepo.delete(journalLogo);
		}
		journalLogo = new JournalLogo();
		try{
			journalLogo.setFileName(file.getOriginalFilename());
			journalLogo.setJournalLogoData(file.getBytes());
			journalLogo.setJournalShortName(journalShortName);
			journalLogoRepo.save(journalLogo);
		json.put("status", "Success");
		json.put("message", "Journal Logo uploaded successfully");
		
		}catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while uploading journal Logo");
		}
		
		return json.toString();
	}
	
	public byte[] getJournalLogo(String journalShortName){
		byte[] journalLogoData = null;
		try{
		JournalLogo journalLogo = journalLogoRepo.findByJournalShortName(journalShortName);
		if(null != journalLogo){
			journalLogoData = journalLogo.getJournalLogoData();
		}
		}catch(Exception e){
			
		}
		return journalLogoData;
	}
	
	public String getJournalLogoData(String journalShortName){
		byte[] journalLogoData = null;
		JSONObject json = new JSONObject();
		JournalLogo journalLogo = journalLogoRepo.findByJournalShortName(journalShortName);
		try{
		if(null != journalLogo){
			journalLogoData = journalLogo.getJournalLogoData();
			json.put("status", "Success");
			json.put("message", "Journal Logo fetched successfully");
			json.put("journalPDFData", new String(journalLogoData));
		}else{
			json.put("status", "Error");
			json.put("message", "journal Logo does not exists");
		}
		}catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while fetching journal PDF data");
		}
		return json.toString();
	}
	
	public String deleteJournalLogo(String journalShortName){
		
		JSONObject json = new JSONObject();
		JournalLogo journalLogo = journalLogoRepo.findByJournalShortName(journalShortName);
		if(null != journalLogo){
			journalLogoRepo.delete(journalLogo);
			json.put("status", "Success");
			json.put("message", "Journal Logo deleted successfully");
		}else{
			json.put("status", "Error");
			json.put("message", "journal Logo does not exists");
		}
		return json.toString();
	}

}
