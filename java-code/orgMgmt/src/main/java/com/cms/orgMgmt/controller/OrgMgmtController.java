package com.cms.orgMgmt.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cms.orgMgmt.beans.OrgMenuBean;
import com.cms.orgMgmt.services.OrgMenuService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@Api(value = " Organization Management")
public class OrgMgmtController {
	
	@Autowired
	OrgMenuService orgMenuSerice;
	
	@ApiOperation(value = " Sample test service to check health check")
	@GetMapping("/test")
	public String testService(){
		return " Article Application is running at "+new Date();
	}

	@ApiOperation(value = " Service to create OrgMenu")
	@PostMapping("/orgMenu")
	public String createOrgMenu(@RequestBody OrgMenuBean orgMenuBean){
		return orgMenuSerice.createOrgMenu(orgMenuBean);
	}
	
	@ApiOperation(value = " Service to update OrgMenu")
	@PutMapping("/orgMenu")
	public String updateOrgMenu(@RequestBody OrgMenuBean orgMenuBean){
		return orgMenuSerice.updateOrgMenu(orgMenuBean);
	}
	
	@ApiOperation(value = " Service to fetch OrgMenus by status")
	@GetMapping("/orgMenu/{menuStatus}")
	public String getAllOrgMenusByStatus(@PathVariable String menuStatus){
		return orgMenuSerice.getAllOrgMenusByStatus(menuStatus);
	}
	
	@ApiOperation(value = " Service to fetch all OrgMenus")
	@GetMapping("/orgMenu")
	public String getAllOrgMenus(){
		return orgMenuSerice.getAllOrgMenus();
	}
	
	@DeleteMapping("/orgMenu/{menuId}")
	public String deleteOrgMenu(@PathVariable Long menuId){
		return orgMenuSerice.deleteOrgMenu(menuId);
	}
	
	@PostMapping("/orgMenu/orgMenuImage/{orgMenuIdId}")
	public String uploadOrgMenuImage(@RequestBody MultipartFile file,@PathVariable Long orgMenuIdId){
		return orgMenuSerice.uploadOrgMenuImage(file, orgMenuIdId);
	}
	
	@GetMapping("/orgMenu/orgMenuImage/{orgMenuIdId}")
	public byte[] getUserProfileImage(@PathVariable Long orgMenuIdId){
		return orgMenuSerice.getOrgMenuImage(orgMenuIdId);
	}
}
