package com.cms.userMgmt.service;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cms.userMgmt.model.Profilepic;
import com.cms.userMgmt.repositories.ProfilePicRepo;
import com.google.gson.Gson;

@Service
public class ProfilePicService {

	@Autowired
	ProfilePicRepo profilePicRepo;
	
	public String uploadUserProfileImage( MultipartFile file, String userId){
		JSONObject json = new JSONObject();
		try{
		Profilepic profilePic = new Profilepic();
		profilePic.setUserId(userId);
		profilePic.setFileName(file.getName());
		profilePic.setProfilePic(file.getBytes());
		profilePicRepo.save(profilePic);
		json.put("status", "Success");
		json.put("message", "Profile picture uploaded successfully");
		}catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while uploading profile picture");
		}
		return json.toString();
	}
	
	
	public byte[] getUserProfileImage(String userId){
		JSONObject json = new JSONObject();
		//Gson gson = new Gson();
		Profilepic profilePic = profilePicRepo.findByUserId(userId);
		if(null != profilePic){
			try{
				return profilePic.getProfilePic();
			//json = (JSONObject)  new JSONParser().parse(gson.toJson(profilePic,Profilepic.class));
			//json.put("status", "Success");
			//json.put("message", "Profile picture downloaded successfully");
			}catch(Exception e){
				json.put("status", "Error");
				json.put("message", "Error while downloading profile picture");
			}
			//journalJson = (JSONObject)  new JSONParser().parse(gson.toJson(journalModel,Journal.class));
		}else{
			json.put("status", "Error");
			json.put("message", "profile picture not available");
		}
		return null;
	}
	
	
}
