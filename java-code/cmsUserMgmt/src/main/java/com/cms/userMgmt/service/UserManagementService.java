package com.cms.userMgmt.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cms.userMgmt.beans.PasswordResetReq;
import com.cms.userMgmt.beans.UserBean;
import com.cms.userMgmt.model.User;
import com.cms.userMgmt.model.UserRoles;
import com.cms.userMgmt.repositories.UserRepository;
import com.cms.userMgmt.repositories.UserRolesRepo;
import com.google.gson.Gson;

@Service
public class UserManagementService {

	private static final Logger log = LoggerFactory.getLogger(UserManagementService.class.getSimpleName());
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	UserRolesRepo userRolesRepo;
	
	public String createUser(UserBean userBean){
		
		JSONObject json = new JSONObject();
		log.info("Entering createUser");
		User userModel = null;
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");  
		if(null != userBean){
			userModel = userRepo.findByUserId(userBean.getUserId().toLowerCase());
			if(null != userModel){
				json.put("status", "Error");
				json.put("message", "UserId :"+userBean.getUserId() + " already exists");
				return json.toString();
			}
			userModel = new User();
			userModel.setUserId(userBean.getUserId().toLowerCase());
			if(null != userBean.getUserName())
			userModel.setUserName(userBean.getUserName());
			if(null != userBean.getPassword())
				userModel.setPassword(userBean.getPassword());	
			userModel.setEmail(userBean.getEmail());
			if(null != userBean.getEmail())
			userModel.setAltEmail(userBean.getAltEmail());
			if(null != userBean.getMobile())
			userModel.setMobile(userBean.getMobile());
			if(null != userBean.getGender())
			userModel.setGender(userBean.getGender());
			try{
				if(null != userBean.getCreatedDate())
				userModel.setCreatedDate(formatter.parse(userBean.getCreatedDate()));
				}catch(Exception e){}
			userModel.setUpdatedDate(new Date());
			userModel.setUpdatedBy("");
			if(null != userBean.getStatus())
			userModel.setStatus(userBean.getStatus());
			if(null != userBean.getDesignation())
			userModel.setDesignation(userBean.getDesignation());
			if(null != userBean.getAddress())
			userModel.setAddress(userBean.getAddress());
			if(null != userBean.getInterests())
			userModel.setInterests(userBean.getInterests());
			if(null != userBean.getBiography())
			userModel.setBiography(userBean.getBiography());
			if(null != userBean.getDob())
			try{
				if(null != userBean.getDob())
				userModel.setDob(formatter.parse(userBean.getDob().toString()));
			}catch(Exception e){}
			userRepo.save(userModel);
			log.info("User created successfully");
			json.put("status", "Success");
			json.put("message", "User created successfully");
			return json.toString();
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
			return json.toString();
		}
	}
	
	
	public String updateUser(UserBean userBean){
		
		JSONObject json = new JSONObject();
		User userModel = userRepo.findByUserId(userBean.getUserId().toLowerCase());
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");  
		if(null != userModel){
			userModel.setUserId(userBean.getUserId().toLowerCase());
			if(null != userBean.getUserName())
			userModel.setUserName(userBean.getUserName());
			if(null != userBean.getPassword())
				userModel.setPassword(userBean.getPassword());	
			userModel.setEmail(userBean.getEmail());
			if(null != userBean.getEmail())
			userModel.setAltEmail(userBean.getAltEmail());
			if(null != userBean.getMobile())
			userModel.setMobile(userBean.getMobile());
			if(null != userBean.getGender())
			userModel.setGender(userBean.getGender());
			try{
			if(null != userBean.getCreatedDate())
			userModel.setCreatedDate(formatter.parse(userBean.getCreatedDate()));
			}catch(Exception e){}
			userModel.setUpdatedDate(new Date());
			if(null != userBean.getUpdatedBy())
			userModel.setUpdatedBy(userBean.getUpdatedBy());
			if(null != userBean.getStatus())
			userModel.setStatus(userBean.getStatus());
			if(null != userBean.getDesignation())
			userModel.setDesignation(userBean.getDesignation());
			if(null != userBean.getAddress())
			userModel.setAddress(userBean.getAddress());
			if(null != userBean.getInterests())
			userModel.setInterests(userBean.getInterests());
			if(null != userBean.getBiography())
			userModel.setBiography(userBean.getBiography());
			try{
			if(null != userBean.getDob())
			userModel.setDob(formatter.parse(userBean.getDob().toString()));
				}catch(Exception e){}
			userRepo.save(userModel);
			log.info("User updated successfully");
			json.put("status", "Success");
			json.put("message", "User updated successfully");
		}else{
			json.put("status", "Error");
			json.put("message", "User does not exist");
		}
		return json.toString();
	}
	
	
	public String getUserByUserId(String userId){

		JSONObject json = new JSONObject();
		Gson gson = new Gson();
		User userModel = userRepo.findByUserId(userId);
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
		if(null != userModel){
			JSONObject userJson = new JSONObject();
			try {
				userJson = (JSONObject)  new JSONParser().parse(gson.toJson(userModel,User.class));
				String createdDate = formatter.format(userModel.getCreatedDate());
				String updatedDate = formatter.format(userModel.getUpdatedDate());
				String dob = formatter.format(userModel.getDob());
				userJson.put("createdDate", createdDate);
				userJson.put("updatedDate", updatedDate);
				userJson.put("dob", dob);
			} catch (Exception e) {
				log.error("Error while parsing the user json",e);
			}
			json.put("status", "Success");
			json.put("message", "User details fetched successfully");
			json.put("user",userJson);
		}else{
			json.put("status", "Error");
			json.put("message", "User does not exist");
		}
		
		return json.toString();
		
	}
	
	public String deleteUser(String userId){
		
		JSONObject json = new JSONObject();
		User userModel = userRepo.findByUserId(userId);
		if(null != userModel){
			userRepo.delete(userModel);
			json.put("status", "Success");
			json.put("message", "User deleted successfully");
		}else{
			json.put("status", "Error");
			json.put("message", "User does not exist");
		}
		return json.toString();
	}
	
	public String getAllUser(){
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		Gson gson = new Gson();
		List<UserBean> userList = new ArrayList<>();
		List<User> userModels = userRepo.findAll();
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
		if(null != userModels && userModels.size() > 0){
			for(User userModel : userModels){
			
				JSONObject userJson = new JSONObject();
				try {
					userJson = (JSONObject)  new JSONParser().parse(gson.toJson(userModel,User.class));
					String createdDate = formatter.format(userModel.getCreatedDate());
					String updatedDate = formatter.format(userModel.getUpdatedDate());
					String dob = formatter.format(userModel.getDob());
					userJson.put("createdDate", createdDate);
					userJson.put("updatedDate", updatedDate);
					userJson.put("dob", dob);
				} catch (ParseException e) {
					log.error("Error while parsing the user json",e);
				}	
				array.add(userJson);
			}
			
			json.put("status", "Success");
			json.put("message", "All users");
			json.put("users", array);
		}
		return json.toString();
	}
	
	public String getUsersByRole(String roleName){
		
		JSONObject json = new JSONObject();
		List<String> userIds = new ArrayList<>();
		
		List<UserRoles> usersByRole = userRolesRepo.findByRoleName(roleName);
		for(UserRoles userRole: usersByRole ){
			userIds.add(userRole.getUserId());
		}
		json.put("status", "Success");
		json.put("message", "user logged-in successfully");
		json.put("userIds",userIds);
		
		return json.toString();
	}
	
	
	private String getUserRoles(String userId){
		StringBuilder roles = new StringBuilder();
		String rolesString = "";
		List<UserRoles> rolesList = userRolesRepo.findByUserId(userId);
		int i = 0;
		for(UserRoles role: rolesList){
			
			roles.append(role.getRoleName()).append(",");
		}
		if(roles.length() > 0){
			rolesString = roles.toString();
			rolesString = rolesString.substring(0, rolesString.length()-1);
		log.info("User Roles :: "+rolesString);
		}
		return rolesString;
	}
	
	public String userLogin(UserBean user){
		JSONObject json = new JSONObject();
		Gson gson = new Gson();
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
		if(null != user){
		User userModel = userRepo.findByUserId(user.getUserId().toLowerCase());
		if(null != userModel){
			String password = user.getPassword();
			if(password.equals(userModel.getPassword())){
				JSONObject userJson = new JSONObject();
				try {
					userJson = (JSONObject)  new JSONParser().parse(gson.toJson(userModel,User.class));
					String createdDate = formatter.format(userModel.getCreatedDate());
					String updatedDate = formatter.format(userModel.getUpdatedDate());
					String dob = formatter.format(userModel.getDob());
					userJson.put("createdDate", createdDate);
					userJson.put("updatedDate", updatedDate);
					userJson.put("dob", dob);
					userJson.put("roles", getUserRoles(user.getUserId()));
				} catch (ParseException e) {
					log.error("Error while parsing the user json",e);
				}
				json.put("status", "Success");
				json.put("message", "user logged-in successfully");
				json.put("user",userJson);
			}else{
				json.put("status", "Error");
				json.put("message", "Login failed");
			}
			
		}else{
			json.put("status", "Error");
			json.put("message", "user does not exists");
		}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid request");
		}
		
		return json.toString();
	}
	
	public String resetPassword(PasswordResetReq request){
		JSONObject json = new JSONObject();
		
		if(null != request){
			User userModel = userRepo.findByUserId(request.getUserId());
			if(null != userModel){
				String cpswd = request.getcPassword();
				String npswd = request.getnPassword();
				String npswdConf = request.getnPasswordConf();
				if(cpswd.equals(userModel.getPassword())){
					if(npswd.equals(npswdConf)){
						userModel.setPassword(npswd);
						userRepo.save(userModel);
						json.put("status", "Success");
						json.put("message", "Password reset successfully");
						
					}else{
						json.put("status", "Error");
						json.put("message", "Password doesn't match with conf password");
					}
				}else{
					json.put("status", "Error");
					json.put("message", "Invalid password");
				}
			}else{
				json.put("status", "Error");
				json.put("message", "User does nt exists");
			}
					
		}
		
		return json.toString();
	}
	
	public String uploadUserImage(MultipartFile file, String userId){
		JSONObject json = new JSONObject();
		if(null != file){
			User userModel = userRepo.findByUserId(userId);
			if(null != userModel){
				json = uploadFile(file,userId);
				//userModel.setPhoto(file.getBytes());
				if("Success".equals(json.get("status"))){
					userModel.setPhoto((String)json.get("path"));
					userRepo.save(userModel);
					json.put("status", "Success");
					json.put("message", "User image uploaded successfully");
				}else{
					json.put("status", "Error");
					json.put("message", "Error while uploading User profile image");
				}
				}else{
				json.put("status", "Error");
				json.put("message", "User does nt exists");
			}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid file");
		}
		return json.toString();
	}
	
	public JSONObject uploadFile(MultipartFile file,String userId){
		JSONObject json = new JSONObject();
		String uploadPath = "userProfiles//";
		try{
		 byte[] bytes = file.getBytes();
         Path path = Paths.get(uploadPath + userId+"-"+file.getOriginalFilename());
         Files.write(path, bytes);
         json.put("status", "Success");
		 json.put("message", "User image uploaded successfully");
		 json.put("path", path.toString());
		} catch (IOException e) {
			 json.put("status", "Error");
			 json.put("message", "Error while uploading user profile image");
		}
		return json;
	}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
	public String getUserProfileImage(String userId){
		JSONObject json = new JSONObject();	
		String path = "";
		User userModel = userRepo.findByUserId(userId);
		
		if(null != userModel){
			try{
				path = 	userModel.getPhoto();
				if(null != path){
				File f = new File(path);
				json.put("status","Success");
				json.put("message", "profile image");
				json.put("imagePath",  f.getCanonicalPath());
				}else{
				json.put("status","Error");
				json.put("message", "profile image not available for the user");
				}
				
			}catch(Exception e){
				json.put("status","Error");
				json.put("message", "Error while fetching user profile picture");
			}
		}else{
			json.put("status","Error");
			json.put("message", "user does not exists");
		}
		return json.toString();
	}
	
	/*public JSONObject populateUserJsonFromModel(User userModel){
		
		JSONObject userJson = new JSONObject();
		userJson.put("userId", userModel.getUserId());
		userJson.put("userName", userModel.getUserName());
		userJson.put("password", userModel.getPassword());
		userJson.put("email",userModel.getEmail() );
		userJson.put("altEmail", userModel.getAltEmail());
		userJson.put("mobile",userModel.getMobile() );
		userJson.put("gender", userModel.getGender());
		userJson.put("createdDate", userModel.getCreatedDate());
		userJson.put("updatedDate",userModel.getUpdatedDate() );
		userJson.put("updatedBy", userModel.getUpdatedBy());
		userJson.put("status",userModel.getStatus() );
		userJson.put("designation",userModel.getDesignation() );
		userJson.put("address",userModel.getAddress() );
		userJson.put("interests", userModel.getInterests());
		userJson.put("biography", userModel.getBiography());
				
		return userJson;
	}*/
	
	public UserBean populateUserFromModel(User userModel){
		UserBean user = new UserBean();
		user.setUserId(userModel.getUserId());
		user.setUserName(userModel.getUserName());
		user.setPassword(userModel.getPassword());
		user.setEmail(userModel.getEmail());
		user.setAltEmail(userModel.getAltEmail());
		user.setMobile(userModel.getMobile());
		user.setGender(userModel.getGender());
		//user.setCreatedDate(userModel.getCreatedDate());
		//user.setUpdatedDate(userModel.getUpdatedDate());
		user.setUpdatedBy(userModel.getUpdatedBy());
		user.setStatus(userModel.getStatus());
		user.setDesignation(userModel.getDesignation());
		//user.setPhoto(userModel.getPhoto());
		user.setAddress(userModel.getAddress());
		user.setInterests(userModel.getInterests());
		user.setBiography(userModel.getBiography());
		
		return user;
	}
	
}
