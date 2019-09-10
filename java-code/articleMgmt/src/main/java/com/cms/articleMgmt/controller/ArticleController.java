package com.cms.articleMgmt.controller;

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

import com.cms.articleMgmt.beans.ArticleStatusBean;
import com.cms.articleMgmt.services.ArticleStatusService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@Api(value = " Article Management")
public class ArticleController {

	@Autowired
	ArticleStatusService articleStatusService;
	
	
	@ApiOperation(value = " Sample test service to check health check")
	@GetMapping("/test")
	public String testService(){
		return " Article Application is running at "+new Date();
	}
	
	@ApiOperation(value = " Service to Create Article status")
	@PostMapping("/articleStatus")
	public String createArticleStatus(@RequestBody ArticleStatusBean articleStatusBean){
		return articleStatusService.createOrUpdateArticleStatus(articleStatusBean, "create");
	}
	
	@ApiOperation(value = " Service to Update Article status")
	@PutMapping("/articleStatus")
	public String updateArticleStatus(@RequestBody ArticleStatusBean articleStatusBean){
		return articleStatusService.createOrUpdateArticleStatus(articleStatusBean, "update");
	}
	
	@ApiOperation(value = " Service to fetch Article status by code")
	@GetMapping("/articleStatus/{articleStatusCode}")
	public String getArticleStatusByCode(@PathVariable String articleStatusCode){
		return articleStatusService.getArticleStatusByCode(articleStatusCode);
	}

	@ApiOperation(value = " Service to fetch All Article status")
	@GetMapping("/articleStatus")
	public String getAllArticleStatusByCode(){
		return articleStatusService.getAllArticleStatuses();
	}
	

	@ApiOperation(value = " Service to Delete Article status")
	@DeleteMapping("/articleStatus/{articleStatusCode}")
	public String deleteArticleStatusByCode(@PathVariable String articleStatusCode){
		return articleStatusService.deleteArticleStatus(articleStatusCode);
	}
	
	
}
