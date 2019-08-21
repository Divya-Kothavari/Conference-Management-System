package com.cms.userMgmt.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cms.userMgmt.beans.PasswordResetReq;
import com.cms.userMgmt.beans.RoleReq;
import com.cms.userMgmt.beans.UserBean;
import com.cms.userMgmt.service.RoleService;
import com.cms.userMgmt.service.UserManagementService;
import com.cms.userMgmt.service.UserRolesService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/userMgmt")
@Api(value="User management API - for managing users")
public class UserController {
	
	@Autowired
	private UserManagementService userMgmtService;
	
	@Autowired
	private RoleService roleService;
	
	@GetMapping("/userTestt")
	@ApiOperation(value = " This is a test service under user management to check whether the usermanagement service is up or not")
	public String testApp(){
		return "user service is running fine @"+new Date();
	}
	
	@PostMapping("/login")
	public String userLogin(@RequestBody  UserBean userBean){
		
		return userMgmtService.userLogin(userBean);
	}
	
	@PostMapping("/passwordReset")
	public String userRegistration(@RequestBody PasswordResetReq request){
		
		return userMgmtService.resetPassword(request);
	}
	
	@PostMapping("/user")
	public String createUser(@RequestBody UserBean userBean){
		
		return userMgmtService.createUser(userBean);
		
	}
	
	@GetMapping("/user/{userId}")
	public String getUserByUserId(@PathVariable String userId){
		
		return userMgmtService.getUserByUserId(userId);
		
	}
	
	@GetMapping("/users")
	public String getAllUser(){
		
		return userMgmtService.getAllUser();
		
	}
	
	@PutMapping("/user")
	public String updateUser(@RequestBody UserBean userBean){
		
		return userMgmtService.updateUser(userBean);
		
	}
	
	@DeleteMapping("/user/{userId}")
	public String deleteUser(@PathVariable String userId){
		
		return userMgmtService.deleteUser(userId);
	}
	
	@PostMapping("/user/image/{userId}")
	public String uploadUserImage(@RequestBody MultipartFile file,@PathVariable String userId){
		return userMgmtService.uploadUserImage(file, userId);
	}
	
	@PutMapping("/user/image/{userId}")
	public String updateUserImage(@RequestBody MultipartFile file,@PathVariable String userId){
		return userMgmtService.uploadUserImage(file, userId);
	}
	
	@GetMapping("/user/image/{userId}")
	public String getProfileImage(@PathVariable String userId){
		return userMgmtService.getUserProfileImage(userId);
	}
	
	@PostMapping("/role")
	public String createRole(@RequestBody  RoleReq role){
		return roleService.createRole(role);
	}
	
	@GetMapping("/role")
	public String getAllRoles(){
		return roleService.getRoles();
	}
	
	@GetMapping("/role/{roleName}")
	public String getRoleByName(@PathVariable String roleName){
		return roleService.getRoleByName(roleName);
	}
	
	@PutMapping("/role")
	public String updateRole(@RequestBody RoleReq role){
		return roleService.updateRole(role);
	}
	
	@DeleteMapping("/role/{roleName}")
	public String deleteRole(@PathVariable String roleName){
		return roleService.deleteRole(roleName);
	}
	
	@Autowired
	UserRolesService userRolesService;
	
	@PostMapping("/userRoles/{userId}")
	public String assignUserRoles(@PathVariable String userId,@RequestBody String roleNames){
		
		return userRolesService.assignRole(userId, roleNames);
	}
	
	@GetMapping("/userRoles/{userId}")
	public String getUserRoles(@PathVariable String userId){
		
		return  userRolesService.getUserRoles(userId);
	}
	
}
