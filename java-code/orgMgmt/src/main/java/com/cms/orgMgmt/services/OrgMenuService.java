package com.cms.orgMgmt.services;

import java.util.List;
import java.util.Optional;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cms.orgMgmt.beans.OrgMenuBean;
import com.cms.orgMgmt.models.OrgMenuImage;
import com.cms.orgMgmt.models.OrgMenus;
import com.cms.orgMgmt.repositories.OrgMenuImageRepo;
import com.cms.orgMgmt.repositories.OrgMenusRepo;
import com.google.gson.Gson;

@Service
public class OrgMenuService {
	
	@Autowired
	OrgMenusRepo orgMenusRepo;
	
	@Autowired
	OrgMenuImageRepo orgMenuImageRepo;
	
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
			 if(null != orgMenu.getMenuContent()){
				 orgMenuModel.setMenuContent(orgMenu.getMenuContent());
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
		Optional<OrgMenus> optionalOrgMenuModel = null;
		OrgMenus orgMenuModel = null;
		if(null != orgMenu && orgMenu.getId() != 0){
			try{
			 optionalOrgMenuModel  = orgMenusRepo.findById(orgMenu.getId());
			 if(null != optionalOrgMenuModel && optionalOrgMenuModel.isPresent()){
			 orgMenuModel = optionalOrgMenuModel.get();
			 orgMenuModel.setMenuDescription(orgMenu.getMenuDescription());
			 orgMenuModel.setMenuLink(orgMenu.getMenuLink());
			 orgMenuModel.setMenuName(orgMenu.getMenuName());
			 orgMenuModel.setMenuStatus(orgMenu.getMenuStatus());
			// orgMenuModel = orgMenusRepo.save(orgMenuModel);
			// if(orgMenu.getMenuParentId() != 0){
			 Optional<OrgMenus> oprionalParentOrgMenuModel = orgMenusRepo.findById(orgMenu.getMenuParentId());
			 if(null != oprionalParentOrgMenuModel && oprionalParentOrgMenuModel.isPresent()){
			 OrgMenus parentOrgMenuModel = oprionalParentOrgMenuModel.get();
			 orgMenuModel.setMenuParentId(parentOrgMenuModel.getId());
			 if(orgMenu.getId() != orgMenu.getMenuParentId()){
			 orgMenuModel.setMenuLevel(parentOrgMenuModel.getMenuLevel()+1);
			 }else{
				 orgMenuModel.setMenuLevel(0L);	 
			 }
			 }
			 else{
			 orgMenuModel.setMenuParentId(orgMenuModel.getId());
			 orgMenuModel.setMenuLevel(0L);
			 }
			 if(null != orgMenu.getMenuContent()){
				 orgMenuModel.setMenuContent(orgMenu.getMenuContent());
			 }
			 orgMenuModel = orgMenusRepo.save(orgMenuModel);
			 json.put("status", "Success");
			 json.put("message", "OrgMenu Updated successfully");
			 }else{
				 json.put("status", "Error");
					json.put("message", "OrgMenu does not exist "); 
			 }
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
	
	public String uploadOrgMenuImage( MultipartFile file, Long orgMenuId){
		JSONObject json = new JSONObject();
		try{
			Optional<OrgMenus> orgMenu = null;
			try{
				orgMenu = orgMenusRepo.findById(orgMenuId);
			}catch(Exception e){
				System.out.println("Exception in uploadOrgMenuImage -- "+e);
			}
			if(null != orgMenu && orgMenu.isPresent()){
			OrgMenuImage orgMenuImage = orgMenuImageRepo.findByOrgMenuId(orgMenuId);
			if(null != orgMenuImage){
				orgMenuImage.setOrgMenuImageData(file.getBytes());
			}else{
			orgMenuImage = new OrgMenuImage();
			orgMenuImage.setOrgMenuId(orgMenuId);
			orgMenuImage.setFileName(file.getOriginalFilename());
			orgMenuImage.setOrgMenuImageData(file.getBytes());
			}
			orgMenuImageRepo.save(orgMenuImage);
			json.put("status", "Success");
			json.put("message", "Org Menu Image uploaded successfully");
			}else{
				json.put("status", "Error");
				json.put("message", "OrgMenu does not exist with given id");
			}
		  }catch(Exception e){
			json.put("status", "Error");
			json.put("message", "Error while uploading OrgMenu Image");
		}
		return json.toString();
	}
	

	public byte[] getOrgMenuImage(Long orgMenuId){
		OrgMenuImage orgMenuImage = orgMenuImageRepo.findByOrgMenuId(orgMenuId);
		if(null != orgMenuImage){
			try{
				return orgMenuImage.getOrgMenuImageData();
			}catch(Exception e){
			}
		}
		return null;
	}
	
}
