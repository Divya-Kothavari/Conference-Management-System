package com.cms.journalMgmt.services;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.journalMgmt.beans.ArticleTypeBean;
import com.cms.journalMgmt.model.ArticleType;
import com.cms.journalMgmt.repositories.ArticleTypeRepo;
import com.google.gson.Gson;

@Service
public class ArticleTypeService {
	
	@Autowired
	ArticleTypeRepo articleTypeRepo;
	
	public String createorUpdateArticleType(ArticleTypeBean articleType,String action){
		JSONObject json = new JSONObject();
		if(null != articleType){
			ArticleType articleTypeModel = articleTypeRepo.findByArticleType(articleType.getArticleType());
			if(null != articleTypeModel){
				if(action.equalsIgnoreCase("create")){
					json.put("status", "Error");
					json.put("message", "ArticleType already available");
				}else if(action.equalsIgnoreCase("update")){
					articleTypeModel.setArticleType(articleType.getArticleType());
					articleTypeModel.setArticleTypeDescription(articleType.getArticleTypeDescription());
					articleTypeRepo.save(articleTypeModel);
					json.put("status", "Success");
					json.put("message", "ArticleType updated successfully");
				}
			}else{
				if(action.equalsIgnoreCase("create")){
					articleTypeModel = new ArticleType();
					articleTypeModel.setArticleType(articleType.getArticleType());
					articleTypeModel.setArticleTypeDescription(articleType.getArticleTypeDescription());
					articleTypeRepo.save(articleTypeModel);
					json.put("status", "Success");
					json.put("message", "ArticleType created successfully");
				}else if(action.equalsIgnoreCase("update")){
					json.put("status", "Error");
					json.put("message", "ArticleType not available to update");
				}
			}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	public String getAllArticleTypes(){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		Gson gson = new Gson();
		List<ArticleType> articleTypeModelList = articleTypeRepo.findAll();
		if(null != articleTypeModelList && articleTypeModelList.size() > 0){
			for(ArticleType articleTypeModel : articleTypeModelList){
				//jsonStr = (JSONObject)  new JSONParser().parse(gson.toJson(editorialBoard,EditorialBoard.class));
				try{
					json = new JSONObject();
					json = (JSONObject)  new JSONParser().parse(gson.toJson(articleTypeModel,ArticleType.class));
					array.add(json);
				}catch(Exception e){}
			}
			json = new JSONObject();
			json.put("status", "Success");
			json.put("message", "Article Type details fetched successfully");
			json.put("articleTypes", array);			
		}else{
			json.put("status", "Error");
			json.put("message", "No data found");
		}
		return json.toString();
	}
	
	public String getArticleType(String articleType){
		JSONObject json = new JSONObject();
		Gson gson = new Gson();
		if(null != articleType){
		ArticleType articleTypeModel = articleTypeRepo.findByArticleType(articleType);
		if(null != articleTypeModel){
			try{
				json = new JSONObject();
				json = (JSONObject)  new JSONParser().parse(gson.toJson(articleTypeModel,ArticleType.class));
				json.put("status", "Success");
				json.put("message", "Article Type details fetched successfully");
			}catch(Exception e){
				json.put("status", "Error");
				json.put("message", "Error while fetching ArticleType");
			}
		}else{
			json.put("status", "Error");
			json.put("message", "No data found");
		}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	public String deleteArticleType(String articleType){
		JSONObject json = new JSONObject();
		
		if(null != articleType){
			ArticleType articleTypeModel = articleTypeRepo.findByArticleType(articleType);
			if(null != articleTypeModel){
				articleTypeRepo.delete(articleTypeModel);
				json.put("status", "Success");
				json.put("message", "ArticleType deleted successfully");
			}else{
				json.put("status", "Error");
				json.put("message", "ArticleType not found");
			}
			
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	
}
