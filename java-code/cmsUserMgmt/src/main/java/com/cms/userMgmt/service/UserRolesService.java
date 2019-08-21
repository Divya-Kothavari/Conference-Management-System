package com.cms.userMgmt.service;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.userMgmt.model.UserRoles;
import com.cms.userMgmt.repositories.UserRolesRepo;

@Service
public class UserRolesService {
	
	private static final Logger log = LoggerFactory.getLogger(UserRolesService.class.getSimpleName());
	
	@Autowired
	UserRolesRepo userRolesRepo;
	
	public String assignRole(String  userId,String roleNames){
		JSONObject json = new JSONObject();
		log.info("fetching current roles for user - "+userId);
		List<UserRoles> roles = userRolesRepo.findByUserId(userId);
		log.info("Current roles for user - "+roles.toString());
		if(null != roles && roles.size()>0){
		log.info("Removing current roles for user ");
		userRolesRepo.deleteInBatch(roles);
		log.info("Removed current roles for user and new roles are - "+roleNames);
		}
		if(null != roleNames){
		String[] rolesArray = roleNames.split(",");
		for(String role:rolesArray){
			UserRoles userRole = new UserRoles();
			userRole.setRoleName(role);
			userRole.setUserId(userId);
			userRolesRepo.save(userRole);
		}
		log.info("User roles updated successfully");
		}
		json.put("status","Success");
		json.put("message", "User roles assigned successfully");
		
		return json.toString();
	}
	
	public String getUserRoles(String userId){
		JSONObject json = new JSONObject();
		JSONObject rolesJson = new JSONObject();
		List<UserRoles> roles = userRolesRepo.findByUserId(userId);
		StringBuilder sBuilder = new StringBuilder();
		String rolesString = "";
		if(null != roles && roles.size()>0){
			for(UserRoles role: roles){
				sBuilder.append(role.getRoleName()).append(",");
			}
			rolesString = sBuilder.toString();
			rolesString = rolesString.substring(0, rolesString.length()-1);
			rolesJson.put("userId", userId);
			rolesJson.put("roles", rolesString);
		}
		json.put("status", "Success");
		json.put("message", "User roles");
		json.put("userRoles", rolesJson);
		
		return json.toString();
	}

}
