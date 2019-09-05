package com.cms.journalMgmt.services;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cms.journalMgmt.model.JournalPDF;
import com.cms.journalMgmt.repositories.JournalPDFRepo;

@Service
public class JournalPDFService {

	@Autowired
	JournalPDFRepo journalPDFRepo;
	
	public String uploadJournalPDF(MultipartFile file, String journalShortName){
		
		JSONObject json = new JSONObject();
		
		JournalPDF journalPDF = journalPDFRepo.findByJournalShortName(journalShortName);
		if(null != journalPDF){
			journalPDFRepo.delete(journalPDF);
		}
		journalPDF = new JournalPDF();
		try{
		journalPDF.setFileName(file.getOriginalFilename());
		journalPDF.setJournalPDFData(file.getBytes());
		journalPDF.setJournalShortName(journalShortName);
		journalPDFRepo.save(journalPDF);
		json.put("status", "Success");
		json.put("message", "Journal PDF uploaded successfully");
		
		}catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while uploading journal PDF");
		}
		
		return json.toString();
	}
	
	public byte[] getJournalPDF(String journalShortName){
		byte[] journalPDFData = null;
		
		JournalPDF journalPDF = journalPDFRepo.findByJournalShortName(journalShortName);
		if(null != journalPDF){
			journalPDFData = journalPDF.getJournalPDFData();
		}
		return journalPDFData;
	}
	
	public String getJournalPDFData(String journalShortName){
		byte[] journalPDFData = null;
		JSONObject json = new JSONObject();
		JournalPDF journalPDF = journalPDFRepo.findByJournalShortName(journalShortName);
		try{
		if(null != journalPDF){
			journalPDFData = journalPDF.getJournalPDFData();
			json.put("status", "Success");
			json.put("message", "Journal PDF fetched successfully");
			json.put("journalPDFData", new String(journalPDFData));
		}else{
			json.put("status", "Error");
			json.put("message", "journal PDF does not exists");
		}
		}catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while fetching journal PDF data");
		}
		return json.toString();
	}
	
	public String deleteJournalPDF(String journalShortName){
		
		JSONObject json = new JSONObject();
		JournalPDF journalPDF = journalPDFRepo.findByJournalShortName(journalShortName);
		if(null != journalPDF){
			journalPDFRepo.delete(journalPDF);
			json.put("status", "Success");
			json.put("message", "Journal PDF deleted successfully");
		}else{
			json.put("status", "Error");
			json.put("message", "journal PDF does not exists");
		}
		return json.toString();
	}
}
