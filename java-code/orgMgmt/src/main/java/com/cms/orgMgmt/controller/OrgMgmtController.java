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

import com.cms.orgMgmt.beans.OrgInfoBean;
import com.cms.orgMgmt.beans.OrgMenuBean;
import com.cms.orgMgmt.services.OrgInfoService;
import com.cms.orgMgmt.services.OrgMenuService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@Api(value = " Organization Management")
public class OrgMgmtController {
	
	@Autowired
	OrgMenuService orgMenuService;
	
	@Autowired
	OrgInfoService orgInfoService;
	
	@ApiOperation(value = " Sample test service to check health check")
	@GetMapping("/test")
	public String testService(){
		return " Article Application is running at "+new Date();
	}

	@ApiOperation(value = " Service to create OrgMenu")
	@PostMapping("/orgMenu")
	public String createOrgMenu(@RequestBody OrgMenuBean orgMenuBean){
		return orgMenuService.createOrgMenu(orgMenuBean);
	}
	
	@ApiOperation(value = " Service to update OrgMenu")
	@PutMapping("/orgMenu")
	public String updateOrgMenu(@RequestBody OrgMenuBean orgMenuBean){
		return orgMenuService.updateOrgMenu(orgMenuBean);
	}
	
	@ApiOperation(value = " Service to fetch OrgMenus by status")
	@GetMapping("/orgMenu/{menuStatus}")
	public String getAllOrgMenusByStatus(@PathVariable String menuStatus){
		return orgMenuService.getAllOrgMenusByStatus(menuStatus);
	}
	
	@ApiOperation(value = " Service to fetch all OrgMenus")
	@GetMapping("/orgMenu")
	public String getAllOrgMenus(){
		return orgMenuService.getAllOrgMenus();
	}
	
	@ApiOperation(value = " Service to delete OrgMenu by menuId")
	@DeleteMapping("/orgMenu/{menuId}")
	public String deleteOrgMenu(@PathVariable Long menuId){
		return orgMenuService.deleteOrgMenu(menuId);
	}
	
	@ApiOperation(value = " Service to create/update OrgMenuImage")
	@PostMapping("/orgMenu/orgMenuImage/{orgMenuId}")
	public String uploadOrgMenuImage(@RequestBody MultipartFile file,@PathVariable Long orgMenuId){
		return orgMenuService.uploadOrgMenuImage(file, orgMenuId);
	}
	
	@ApiOperation(value = " Service to fetch OrgMenuImage by menuId")
	@GetMapping("/orgMenu/orgMenuImage/{orgMenuId}")
	public byte[] getOrgMenuImage(@PathVariable Long orgMenuId){
		return orgMenuService.getOrgMenuImage(orgMenuId);
	}
	
	@ApiOperation(value = " Service to create/update OrgInfoImage by infoName")
	@PostMapping("/orgInfo/image/{orgInfoName}")
	public String uploadOrgInfoImage(@RequestBody MultipartFile file,@PathVariable String orgInfoName){
		return orgInfoService.uploadOrgInfoImage(file, orgInfoName);
	}
	
	@ApiOperation(value = " Service to fetch OrgInfoImage by infoName")
	@GetMapping("/orgInfo/image/{orgInfoName}")
	public byte[] getOrgInfoImage(@PathVariable String orgInfoName){
		return orgInfoService.getOrgInfoImage(orgInfoName);
	}
	
	@ApiOperation(value = " Service to create/update OrgInfoData by infoName")
	@PostMapping("/orgInfo/data")
	public String adddOrgInfoData(@RequestBody OrgInfoBean orgInfoBean){
		return orgInfoService.adddOrgInfoData(orgInfoBean);
	}
	
	@ApiOperation(value = " Service to fetch OrgInfoData by infoName")
	@GetMapping("/orgInfo/data/{orgInfoName}")
	public String getOrgInfoData(@PathVariable String orgInfoName){
		return orgInfoService.getOrgInfoData(orgInfoName);
	}
}
