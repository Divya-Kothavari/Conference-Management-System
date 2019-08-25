package com.cms.journalMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.journalMgmt.model.ArticleType;

public interface ArticleTypeRepo extends JpaRepository<ArticleType, Long> {
	
	List<ArticleType> findAll();
	
	ArticleType findByArticleType(String articleType);

}
