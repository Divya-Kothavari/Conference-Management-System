package com.cms.orgMgmt.services;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.orgMgmt.beans.OrgMenuBean;
import com.cms.orgMgmt.models.OrgMenus;
import com.cms.orgMgmt.repositories.OrgMenusRepo;
import com.google.gson.Gson;

@Service
public class OrgMenuService {
	
	@Autowired
	OrgMenusRepo orgMenusRepo;
	
	public String createOrgMenu(OrgMenuBean orgMenu){
		
		JSONObject json = new JSONObject();
		OrgMenus orgMenuModel = null;
		if(null != orgMenu && orgMenu.getId() == 0){
			try{
			 orgMenuModel  = new OrgMenus();
			 orgMenuModel.setMenuDescription(orgMenu.getMenuDescription());
			 orgMenuModel.setMenuLink(orgMenu.getMenuLink());
			 orgMenuModel.setMenuName(orgMenu.getMenuName());
			 orgMenuModel.setMenuStatus(orgMenu.getMenuStatus());
			 orgMenuModel = orgMenusRepo.save(orgMenuModel);
			 if(orgMenu.getMenuParentId() != 0){
			 OrgMenus parentOrgMenuModel = orgMenusRepo.getOne(orgMenu.getMenuParentId());
			 orgMenuModel.setMenuParentId(parentOrgMenuModel.getId());
			 orgMenuModel.setMenuLevel(parentOrgMenuModel.getMenuLevel()+1);
			 }else{
			 orgMenuModel.setMenuParentId(orgMenuModel.getId());
			 orgMenuModel.setMenuLevel(0L);
			 }
			 orgMenuModel = orgMenusRepo.save(orgMenuModel);
			 json.put("status", "Success");
			 json.put("message", "OrgMenu saved successfully");
			}catch(Exception e){
				json.put("status", "Error");
				json.put("message", "Error while creating OrgMenu");
			}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	
public String updateOrgMenu(OrgMenuBean orgMenu){
		
		JSONObject json = new JSONObject();
		OrgMenus orgMenuModel = null;
		if(null != orgMenu && orgMenu.getId() != 0){
			try{
			 orgMenuModel  = orgMenusRepo.getOne(orgMenu.getId());
			 orgMenuModel.setMenuDescription(orgMenu.getMenuDescription());
			 orgMenuModel.setMenuLink(orgMenu.getMenuLink());
			 orgMenuModel.setMenuName(orgMenu.getMenuName());
			 orgMenuModel.setMenuStatus(orgMenu.getMenuStatus());
			// orgMenuModel = orgMenusRepo.save(orgMenuModel);
			 if(orgMenu.getMenuParentId() != 0){
			 OrgMenus parentOrgMenuModel = orgMenusRepo.getOne(orgMenu.getMenuParentId());
			 orgMenuModel.setMenuParentId(parentOrgMenuModel.getId());
			 orgMenuModel.setMenuLevel(parentOrgMenuModel.getMenuLevel()+1);
			 }else{
			 orgMenuModel.setMenuParentId(orgMenuModel.getId());
			 orgMenuModel.setMenuLevel(0L);
			 }
			 orgMenuModel = orgMenusRepo.save(orgMenuModel);
			 json.put("status", "Success");
			 json.put("message", "OrgMenu Updated successfully");
			}catch(Exception e){
				json.put("status", "Error");
				json.put("message", "Error while updating OrgMenu");
			}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		return json.toString();
	}


	public String getAllOrgMenusByStatus(String menuStatus){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		List<OrgMenus> OrgMenusList = null;
		if(null != menuStatus){
			OrgMenusList =	orgMenusRepo.findByMenuStatus(menuStatus);	
		if(null != OrgMenusList && OrgMenusList.size() > 0){
			Gson gson = new Gson();
		//json = (JSONObject)  new JSONParser().parse(gson.toJson(journalModel,Journal.class));
			for(OrgMenus orgMenus:OrgMenusList){
			json = new JSONObject();
			 try{
				 json = (JSONObject)  new JSONParser().parse(gson.toJson(orgMenus,OrgMenus.class));
				 array.add(json);
			 } catch (ParseException e){}
			}
			json = new JSONObject();
			json.put("status", "Success");
			json.put("message", " OrgMenus details fetched successfully");
			json.put("orgMenus", array);
		}
		
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		
		return json.toString();
	}
	
	
	public String getAllOrgMenus(){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		List<OrgMenus> OrgMenusList = null;
			OrgMenusList =	orgMenusRepo.findAll();	
		if(null != OrgMenusList && OrgMenusList.size() > 0){
			Gson gson = new Gson();
		//json = (JSONObject)  new JSONParser().parse(gson.toJson(journalModel,Journal.class));
			for(OrgMenus orgMenus:OrgMenusList){
			json = new JSONObject();
			 try{
				 json = (JSONObject)  new JSONParser().parse(gson.toJson(orgMenus,OrgMenus.class));
				 array.add(json);
			 } catch (ParseException e){}
			}
			json = new JSONObject();
			json.put("status", "Success");
			json.put("message", " OrgMenus details fetched successfully");
			json.put("orgMenus", array);
		}
		
		
		return json.toString();
	}
	
	public String deleteOrgMenu(Long id){
		JSONObject json = new JSONObject();
		try{
			 orgMenusRepo.deleteById(id);
			 json.put("status", "Success");
			 json.put("message", " OrgMenus deleted successfully");
		 
		}catch(Exception e){
			 json.put("status", "Error");
			 json.put("message", " Error while deleting OrgMenus - "+e.getMessage());
		}
		return json.toString();
	}
}
