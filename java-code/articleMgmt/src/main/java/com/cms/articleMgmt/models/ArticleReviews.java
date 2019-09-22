package com.cms.articleMgmt.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ARTICLEREVIEWS")
public class ArticleReviews implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3311651736715489909L;

	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="ARTICLEID")
	private Long articleId;
	
	@Column(name="REVIEWERID")
	private String reviewerId;
	
	@Column(name="REVIEWSTATUS")
	private String reviewStatus;
	
	@Column(name="REVIEWCOMMENTS")
	private String reviewComments;
	
	@Column(name="REVIEWDATE")
	private Date reviewDate;

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the articleId
	 */
	public Long getArticleId() {
		return articleId;
	}

	/**
	 * @param articleId the articleId to set
	 */
	public void setArticleId(Long articleId) {
		this.articleId = articleId;
	}

	/**
	 * @return the reviewerId
	 */
	public String getReviewerId() {
		return reviewerId;
	}

	/**
	 * @param reviewerId the reviewerId to set
	 */
	public void setReviewerId(String reviewerId) {
		this.reviewerId = reviewerId;
	}

	/**
	 * @return the reviewStatus
	 */
	public String getReviewStatus() {
		return reviewStatus;
	}

	/**
	 * @param reviewStatus the reviewStatus to set
	 */
	public void setReviewStatus(String reviewStatus) {
		this.reviewStatus = reviewStatus;
	}

	/**
	 * @return the reviewComments
	 */
	public String getReviewComments() {
		return reviewComments;
	}

	/**
	 * @param reviewComments the reviewComments to set
	 */
	public void setReviewComments(String reviewComments) {
		this.reviewComments = reviewComments;
	}

	/**
	 * @return the reviewDate
	 */
	public Date getReviewDate() {
		return reviewDate;
	}

	/**
	 * @param reviewDate the reviewDate to set
	 */
	public void setReviewDate(Date reviewDate) {
		this.reviewDate = reviewDate;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ArticleReviews [id=" + id + ", articleId=" + articleId + ", reviewerId=" + reviewerId
				+ ", reviewStatus=" + reviewStatus + ", reviewComments=" + reviewComments + ", reviewDate=" + reviewDate
				+ "]";
	}
	
	
}
