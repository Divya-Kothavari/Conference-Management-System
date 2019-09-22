package com.cms.articleMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.articleMgmt.models.ArticleReviews;

public interface ArticleReviewsRepo extends JpaRepository<ArticleReviews, Long> {

	List<ArticleReviews> findByArticleId(Long articleId);
	
	ArticleReviews findByArticleIdAndReviewerId(Long articleId,String reviewerId);
}
