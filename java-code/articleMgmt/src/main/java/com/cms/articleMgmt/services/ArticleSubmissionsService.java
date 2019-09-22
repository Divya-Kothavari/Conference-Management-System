package com.cms.articleMgmt.services;

import java.util.Date;
import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.articleMgmt.beans.ArticleSubmissionBean;
import com.cms.articleMgmt.models.ArticleSubmissions;
import com.cms.articleMgmt.models.ArticleUsers;
import com.cms.articleMgmt.repositories.ArticleSubmissionsRepo;
import com.cms.articleMgmt.repositories.ArticleUsersRepo;

@Service
public class ArticleSubmissionsService {

	@Autowired
	ArticleSubmissionsRepo articleSubmissionsRepo;
	
	@Autowired
	ArticleUsersRepo articleUsersRepo;
	
	public String createArticleSubmission(ArticleSubmissionBean articleSubmissionBean){
		JSONObject json = new JSONObject();
		ArticleSubmissions articleSubmission = null;
		if(null != articleSubmissionBean && articleSubmissionBean.getArticleId() == 0){
			articleSubmission = new ArticleSubmissions();
			if(null != articleSubmissionBean.getArticleAbstract())
			articleSubmission.setArticleAbstract(articleSubmissionBean.getArticleAbstract());
			if(null != articleSubmissionBean.getArticleStatus())
			articleSubmission.setArticleStatus(articleSubmissionBean.getArticleStatus());
			articleSubmission.setArticleSubmittedDate(new Date());
			if(null != articleSubmissionBean.getArticleTitle())
			articleSubmission.setArticleTitle(articleSubmissionBean.getArticleTitle());
			if(null != articleSubmissionBean.getArticleType())
			articleSubmission.setArticleType(articleSubmissionBean.getArticleType());
			articleSubmission.setArticleUpdatedDate(new Date());
			if(null != articleSubmissionBean.getAuthorId())
			articleSubmission.setAuthorId(articleSubmissionBean.getAuthorId());
			if(null != articleSubmissionBean.getEditorComments())
			articleSubmission.setEditorComments(articleSubmissionBean.getEditorComments());
			if(null != articleSubmissionBean.getEditorId())
			articleSubmission.setEditorId(articleSubmissionBean.getEditorId());
			if(null != articleSubmissionBean.getEditorStatus())
			articleSubmission.setEditorStatus(articleSubmissionBean.getEditorStatus());
			articleSubmission.setEditorUpdatedDate(null);
			if(null != articleSubmissionBean.getJournalShortName())
			articleSubmission.setJournalShortName(articleSubmissionBean.getJournalShortName());
			if(null != articleSubmissionBean.getPrimaryAdminComments())
			articleSubmission.setPrimaryAdminComments(articleSubmissionBean.getPrimaryAdminComments());
			if(null != articleSubmissionBean.getSecondaryAdminComments())
			articleSubmission.setSecondaryAdminComments(articleSubmissionBean.getSecondaryAdminComments());
			if(null != articleSubmissionBean.getSubject())
			articleSubmission.setSubject(articleSubmissionBean.getSubject());
			
			articleSubmission = articleSubmissionsRepo.save(articleSubmission);
			List<ArticleUsers> articleUsers = articleSubmissionBean.getArticleUsers();
			if(null != articleUsers && articleUsers.size() > 0){
				addArticleUsers(articleUsers,articleSubmission.getArticleId());
			}
			json.put("status", "Success");
			json.put("message","Article submitted successfully");
		}else{
			json.put("status", "Error");
			json.put("message","Invalid request");
		}
		
		return json.toString();
	}
	
	public String addArticleUsers(List<ArticleUsers> articleUsers,Long articleId){
		JSONObject json = new JSONObject();
		try{
			for(ArticleUsers articleUser:articleUsers){
				articleUser.setArticleId(articleId);
				articleUsersRepo.save(articleUser);
			}
			
		}catch(Exception e){
			System.out.println(e);
		}
		return json.toString();
	}
	
}
