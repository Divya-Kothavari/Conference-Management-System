package com.cms.userMgmt.service;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.userMgmt.beans.RoleReq;
import com.cms.userMgmt.model.Roles;
import com.cms.userMgmt.repositories.RoleRepository;

@Service
public class RoleService {

	@Autowired
	RoleRepository rolesRepo;
	
	public String createRole(RoleReq role){
		JSONObject json = new JSONObject();
		if(null != role){
		Roles roleModel = rolesRepo.findByRoleName(role.getRoleName());
		if(null != roleModel){
			json.put("status", "Error")	;
			json.put("message", "Role already exists");
		}else{
			roleModel = new Roles();
			roleModel.setRoleName(role.getRoleName());
			roleModel.setRoleDescription(role.getRoleDescription());
			rolesRepo.save(roleModel);
			json.put("status", "Success")	;
			json.put("message", "Role created successfully");
		}
		
		}else{
			json.put("status", "Error")	;
			json.put("message", "Invalid request");
		}
		
		return json.toString();
	}
	
	public String updateRole(RoleReq role){
		
		JSONObject json = new JSONObject();
		if(null != role){
		Roles roleModel = rolesRepo.findByRoleName(role.getRoleName());
		if(null != roleModel){
			roleModel = new Roles();
			roleModel.setRoleName(role.getRoleName());
			roleModel.setRoleDescription(role.getRoleDescription());
			rolesRepo.save(roleModel);
			json.put("status", "Success")	;
			json.put("message", "Role updated successfully");
		}else{
			json.put("status", "Error")	;
			json.put("message", "Role does not exists");
		}
		}else{
			json.put("status", "Error")	;
			json.put("message", "Invalid request");
		}
		return json.toString();
	}
	
	public String getRoles(){
		
		JSONObject json = new JSONObject();
		JSONArray array = new JSONArray();
		List<Roles> roleModel = rolesRepo.findAll();
		
		if(null != roleModel && roleModel.size() > 0){
			for(Roles role:roleModel){
				json = new JSONObject();
				json.put("roleId", role.getRoleId());
				json.put("roleName", role.getRoleName());
				json.put("roleDescription", role.getRoleDescription());
				array.add(json);
			}
			json = new JSONObject();
			json.put("status", "Success");
			json.put("message", "Role details");
			json.put("roles", array);
		}else{
			json.put("status", "Success");
			json.put("message", "No records found");
		}
		
		return json.toString();
	}
	
	public String getRoleByName(String roleName){
		JSONObject json = new JSONObject();
		if(null != roleName){
			Roles roleModel = rolesRepo.findByRoleName(roleName);
			json.put("roleId", roleModel.getRoleId());
			json.put("roleName", roleModel.getRoleName());
			json.put("roleDescription", roleModel.getRoleDescription());
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid roleName");
		}
		
		return json.toString();
	}
	
	public String deleteRole(String roleName){
		JSONObject json = new JSONObject();
		if(null != roleName){
			Roles roleModel = rolesRepo.findByRoleName(roleName);
			if(null != roleModel){
				rolesRepo.delete(roleModel);
				json.put("status", "Success");
				json.put("message", "Role deleted successfully");
			}else{
				json.put("status", "Error");
				json.put("message", "Role does not exists");
			}
		}else{
			json.put("status", "Error");
			json.put("message", "Invalid roleName");
		}
		
		return json.toString();
	}
	
}
