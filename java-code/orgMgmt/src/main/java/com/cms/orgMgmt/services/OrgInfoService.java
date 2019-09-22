package com.cms.orgMgmt.services;

import java.util.Optional;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cms.orgMgmt.beans.OrgInfoBean;
import com.cms.orgMgmt.models.OrgInfo;
import com.cms.orgMgmt.models.OrgMenuImage;
import com.cms.orgMgmt.models.OrgMenus;
import com.cms.orgMgmt.repositories.OrgInfoRepo;
import com.google.gson.Gson;

@Service
public class OrgInfoService {
	
	@Autowired
	OrgInfoRepo orgInfoRepo;
	
	public String uploadOrgInfoImage(MultipartFile file, String orgInfoName){
		
		JSONObject json = new JSONObject();
		try{
			OrgInfo orgInfo = null;
			try{
				orgInfo = orgInfoRepo.findByInfoName(orgInfoName);
			}catch(Exception e){
				System.out.println("Exception in uploadOrgInfoImage -- "+e);
			}
			if(null != orgInfo){
				orgInfo.setOrgInfoImageData(file.getBytes());
			}else{
				orgInfo = new OrgInfo();
				orgInfo.setInfoName(orgInfoName);
				orgInfo.setInfoType("Image");
				orgInfo.setOrgInfoImageData(file.getBytes());
			}
			orgInfoRepo.save(orgInfo);
			json.put("status", "Success");
			json.put("message", "OrgInfo Image uploaded successfully");
		  }catch(Exception e){
			  System.out.println(e);
			json.put("status", "Error");
			json.put("message", "Error while uploading OrgInfo Image");
		}
		return json.toString();
	}
	
	public byte[] getOrgInfoImage(String orgInfoName){
		OrgInfo orgInfo  = orgInfoRepo.findByInfoName(orgInfoName);
		if(null != orgInfo){
			try{
				return orgInfo.getOrgInfoImageData();
			}catch(Exception e){
			}
		}
		return null;
	}
	
	public String  adddOrgInfoData(OrgInfoBean orgInfoBean){
		JSONObject json = new JSONObject();
		if(null != orgInfoBean){
			OrgInfo orgInfo  = orgInfoRepo.findByInfoName(orgInfoBean.getInfoName());
			if(null == orgInfo){
				orgInfo = new OrgInfo();
				orgInfo.setInfoType("Data");
			}
			orgInfo.setInfoData(orgInfoBean.getInfoData());
			orgInfo.setInfoName(orgInfoBean.getInfoName());
			orgInfoRepo.save(orgInfo);
			json.put("status", "Success");
			json.put("message", " OrgInfo data saved successfully");
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request Data");
		}
		
		return json.toString();
	}
	
	public String getOrgInfoData(String orgInfoName){
		JSONObject json = new JSONObject();
		Gson gson = new Gson();
		if(null != orgInfoName){
			OrgInfo orgInfo  = orgInfoRepo.findByInfoName(orgInfoName);	
			//json = (JSONObject)  new JSONParser().parse(gson.toJson(journalModel,Journal.class));
			if(null != orgInfo){
			try{
				json = (JSONObject)  new JSONParser().parse(gson.toJson(orgInfo,OrgInfo.class));
				json.put("status", "Success");
				json.put("message", "OrgInfo details fetched successfully");
			}catch(Exception e){
				json.put("status", "Error");
				json.put("message", "Error while fetching OrgInfo data");
			}
			}else{
				json.put("status", "Error");
				json.put("message", "Invalid request ");
			}
		}
		return json.toString();
	}

}
