package com.cms.articleMgmt.services;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.articleMgmt.beans.ArticleStatusBean;
import com.cms.articleMgmt.models.ArticleStatus;
import com.cms.articleMgmt.repositories.ArticleStatusRepo;
import com.google.gson.Gson;

@Service
public class ArticleStatusService {

	
	@Autowired
	ArticleStatusRepo articleStatusRepo;
	
	public String createOrUpdateArticleStatus(ArticleStatusBean articleStatusBean,String action){
		
		JSONObject json = new JSONObject();
		ArticleStatus articleStatus = null;
		if(null != articleStatusBean){
			articleStatus = articleStatusRepo.findByStatusCode(articleStatusBean.getArticleStatusCode());
			if(null != articleStatus ){
				if(action.equalsIgnoreCase("update")){
					articleStatus.setStatusDescription(articleStatusBean.getArticleStatusDescription());	
					articleStatusRepo.save(articleStatus);
					json.put("status", "Success");
					json.put("message", "ArticleStatus updated successfully");
			}else if(action.equalsIgnoreCase("create")){
				json.put("status", "Error");
				json.put("message", "ArticleStatus already available with given code");
			}
			}else{
				if(action.equalsIgnoreCase("create")){
					articleStatus = new ArticleStatus();
					articleStatus.setStatusCode(articleStatusBean.getArticleStatusCode());
					articleStatus.setStatusDescription(articleStatusBean.getArticleStatusDescription());
					articleStatusRepo.save(articleStatus);
					json.put("status", "Success");
					json.put("message", "ArticleStatus created successfully");
				}else if(action.equalsIgnoreCase("update")){
					json.put("status", "Error");
					json.put("message", "ArticleStatus Does not exists with given code");
			}}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	public String getAllArticleStatuses(){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		Gson gson = new Gson();
		List<ArticleStatus> articleStatusList = articleStatusRepo.findAll();
		if(null != articleStatusList && articleStatusList.size() > 0){
			for(ArticleStatus status:articleStatusList){
				json = new JSONObject();
				try{
					json = (JSONObject)  new JSONParser().parse(gson.toJson(status,ArticleStatus.class));
					array.add(json);
				}catch(Exception e){					
				}
			}
			json = new JSONObject();
			json.put("status", "Success");
			json.put("message", "ArticleStatus details fetched successfully");
			json.put("articleStatuses", array);
			
		}else{
			json.put("status", "Error");
			json.put("message", "No data found");
		}
		return json.toString();
	}
	
	public String getArticleStatusByCode(String statusCode){
		JSONObject json = new JSONObject();
		Gson gson = new Gson();
		ArticleStatus articleStatus = articleStatusRepo.findByStatusCode(statusCode);

		if(null != articleStatus){
			try{
				json = (JSONObject)  new JSONParser().parse(gson.toJson(articleStatus,ArticleStatus.class));
				json.put("status", "Success");
				json.put("message", "ArticleStatus details fetched successfully");
			}catch(Exception e){
				json.put("status", "Error");
				json.put("message", "Error while fetching ArticleStatus details");
			}
		}else{
			json.put("status", "Error");
			json.put("message", "No data found");
		}
		return json.toString();
	}
	
	public String deleteArticleStatus(String articleStatusCode){
		JSONObject json = new JSONObject();
		ArticleStatus articleStatus = articleStatusRepo.findByStatusCode(articleStatusCode);

		if(null != articleStatus){
			articleStatusRepo.delete(articleStatus);
			json.put("status", "Success");
			json.put("message", "ArticleStatus details deleted successfully");
			
		}else{
			json.put("status", "Error");
			json.put("message", "ArticleStatusCode does not exists");
		}
		return json.toString();
	}
}
