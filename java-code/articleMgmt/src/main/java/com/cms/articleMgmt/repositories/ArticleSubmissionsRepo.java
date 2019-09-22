package com.cms.articleMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.articleMgmt.models.ArticleSubmissions;

public interface ArticleSubmissionsRepo  extends JpaRepository<ArticleSubmissions, Long> {

	List<ArticleSubmissions> findAll();
	
	List<ArticleSubmissions> findByJournalShortName(String journalShortName);
	
	ArticleSubmissions findByArticleId(Long articleId);
}
