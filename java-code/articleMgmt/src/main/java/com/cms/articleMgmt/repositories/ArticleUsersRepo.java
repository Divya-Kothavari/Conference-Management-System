package com.cms.articleMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.articleMgmt.models.ArticleUsers;

public interface ArticleUsersRepo extends JpaRepository<ArticleUsers, Long> {

	List<ArticleUsers> findByArticleId(Long articleId);
	
	List<ArticleUsers> findByArticleIdAndUserType(Long articleId,String userType);
	
	
}
