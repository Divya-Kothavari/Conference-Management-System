package com.cms.articleMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.articleMgmt.models.ArticleStatus;

public interface ArticleStatusRepo extends JpaRepository<ArticleStatus, Long> {

	List<ArticleStatus> findAll();
	
	ArticleStatus findByStatusCode(String statusCode);
	
}
