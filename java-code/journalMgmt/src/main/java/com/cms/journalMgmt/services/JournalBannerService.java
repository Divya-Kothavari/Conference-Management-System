package com.cms.journalMgmt.services;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cms.journalMgmt.model.JournalBanner;
import com.cms.journalMgmt.model.JournalPDF;
import com.cms.journalMgmt.repositories.JournalBannerRepo;
import com.cms.journalMgmt.repositories.JournalPDFRepo;

@Service
public class JournalBannerService {



	@Autowired
	JournalBannerRepo journalBannerRepo;
	
	public String uploadJournalBanner(MultipartFile file, String journalShortName){
		
		JSONObject json = new JSONObject();
		
		JournalBanner journalBanner = journalBannerRepo.findByJournalShortName(journalShortName);
		if(null != journalBanner){
			journalBannerRepo.delete(journalBanner);
		}
		journalBanner = new JournalBanner();
		try{
			journalBanner.setFileName(file.getOriginalFilename());
			journalBanner.setJournalBannerData(file.getBytes());
			journalBanner.setJournalShortName(journalShortName);
			journalBannerRepo.save(journalBanner);
		json.put("status", "Success");
		json.put("message", "Journal Banner uploaded successfully");
		
		}catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while uploading journal Banner");
		}
		return json.toString();
	}
	
	public byte[] getJournalBanner(String journalShortName){
		byte[] journalBannerData = null;
		
		JournalBanner journalBanner = journalBannerRepo.findByJournalShortName(journalShortName);
		if(null != journalBanner){
			journalBannerData = journalBanner.getJournalBannerData();
		}
		return journalBannerData;
	}
	
	public String getJournalBannerData(String journalShortName){
		byte[] journalBannerData = null;
		JSONObject json = new JSONObject();
		JournalBanner journalBanner = journalBannerRepo.findByJournalShortName(journalShortName);
		try{
		if(null != journalBanner){
			journalBannerData = journalBanner.getJournalBannerData();
			json.put("status", "Success");
			json.put("message", "Journal Banner fetched successfully");
			json.put("journalBannerData", new String(journalBannerData));
		}else{
			json.put("status", "Error");
			json.put("message", "journal Banner does not exists");
		}
		}catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while fetching journal Banner data");
		}
		return json.toString();
	}
	
	public String deleteJournalBanner(String journalShortName){
		
		JSONObject json = new JSONObject();
		JournalBanner journalBanner = journalBannerRepo.findByJournalShortName(journalShortName);
		if(null != journalBanner){
			journalBannerRepo.delete(journalBanner);
			json.put("status", "Success");
			json.put("message", "Journal Banner deleted successfully");
		}else{
			json.put("status", "Error");
			json.put("message", "journal Banner does not exists");
		}
		return json.toString();
	}

	
}
