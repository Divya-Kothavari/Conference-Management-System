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
@Table(name = "ARTICLESUBMISSIONS")
public class ArticleSubmissions implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8474773388919405500L;
	
	@Id
	@Column(name = "ARTICLEID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long articleId;
	
	@Column(name = "ARTICLETITLE")
	private String articleTitle;
	
	@Column(name = "ARTICLETYPE")
	private String articleType;
	
	@Column(name = "SUBJECT")
	private String subject;
	
	@Column(name = "JOURNALSHORTNAME")
	private String journalShortName;
	
	@Column(name = "ARTICLEABSTRACT")
	private String articleAbstract;
	
	@Column(name = "ARTICLESTATUS")
	private String articleStatus;
	
	@Column(name = "AUTHORID")
	private String authorId;
	
	@Column(name = "EDITORID")
	private String editorId;
	
	@Column(name = "EDITORSTATUS")
	private String editorStatus;
	
	@Column(name = "EDITORcOMMENTS")
	private String editorComments;
	
	@Column(name = "EDITORUPDATEDDATE")
	private Date editorUpdatedDate;
	
	@Column(name = "PRIMARYADMINCOMMENTS")
	private String primaryAdminComments;
	
	@Column(name = "SECONDARYADMINCOMMENTS")
	private String secondaryAdminComments;
	
	@Column(name = "ARTICLESUBMITTEDDATE")
	private Date articleSubmittedDate;
	
	@Column(name = "ARTICLEUPDATEDDATE")
	private Date articleUpdatedDate;

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
	 * @return the articleTitle
	 */
	public String getArticleTitle() {
		return articleTitle;
	}

	/**
	 * @param articleTitle the articleTitle to set
	 */
	public void setArticleTitle(String articleTitle) {
		this.articleTitle = articleTitle;
	}

	/**
	 * @return the articleType
	 */
	public String getArticleType() {
		return articleType;
	}

	/**
	 * @param articleType the articleType to set
	 */
	public void setArticleType(String articleType) {
		this.articleType = articleType;
	}

	/**
	 * @return the subject
	 */
	public String getSubject() {
		return subject;
	}

	/**
	 * @param subject the subject to set
	 */
	public void setSubject(String subject) {
		this.subject = subject;
	}

	/**
	 * @return the journalShortName
	 */
	public String getJournalShortName() {
		return journalShortName;
	}

	/**
	 * @param journalShortName the journalShortName to set
	 */
	public void setJournalShortName(String journalShortName) {
		this.journalShortName = journalShortName;
	}

	/**
	 * @return the articleAbstract
	 */
	public String getArticleAbstract() {
		return articleAbstract;
	}

	/**
	 * @param articleAbstract the articleAbstract to set
	 */
	public void setArticleAbstract(String articleAbstract) {
		this.articleAbstract = articleAbstract;
	}

	/**
	 * @return the articleStatus
	 */
	public String getArticleStatus() {
		return articleStatus;
	}

	/**
	 * @param articleStatus the articleStatus to set
	 */
	public void setArticleStatus(String articleStatus) {
		this.articleStatus = articleStatus;
	}

	/**
	 * @return the authorId
	 */
	public String getAuthorId() {
		return authorId;
	}

	/**
	 * @param authorId the authorId to set
	 */
	public void setAuthorId(String authorId) {
		this.authorId = authorId;
	}

	/**
	 * @return the editorId
	 */
	public String getEditorId() {
		return editorId;
	}

	/**
	 * @param editorId the editorId to set
	 */
	public void setEditorId(String editorId) {
		this.editorId = editorId;
	}

	/**
	 * @return the editorStatus
	 */
	public String getEditorStatus() {
		return editorStatus;
	}

	/**
	 * @param editorStatus the editorStatus to set
	 */
	public void setEditorStatus(String editorStatus) {
		this.editorStatus = editorStatus;
	}

	/**
	 * @return the editorComments
	 */
	public String getEditorComments() {
		return editorComments;
	}

	/**
	 * @param editorComments the editorComments to set
	 */
	public void setEditorComments(String editorComments) {
		this.editorComments = editorComments;
	}

	/**
	 * @return the editorUpdatedDate
	 */
	public Date getEditorUpdatedDate() {
		return editorUpdatedDate;
	}

	/**
	 * @param editorUpdatedDate the editorUpdatedDate to set
	 */
	public void setEditorUpdatedDate(Date editorUpdatedDate) {
		this.editorUpdatedDate = editorUpdatedDate;
	}

	/**
	 * @return the primaryAdminComments
	 */
	public String getPrimaryAdminComments() {
		return primaryAdminComments;
	}

	/**
	 * @param primaryAdminComments the primaryAdminComments to set
	 */
	public void setPrimaryAdminComments(String primaryAdminComments) {
		this.primaryAdminComments = primaryAdminComments;
	}

	/**
	 * @return the secondaryAdminComments
	 */
	public String getSecondaryAdminComments() {
		return secondaryAdminComments;
	}

	/**
	 * @param secondaryAdminComments the secondaryAdminComments to set
	 */
	public void setSecondaryAdminComments(String secondaryAdminComments) {
		this.secondaryAdminComments = secondaryAdminComments;
	}

	/**
	 * @return the articleSubmittedDate
	 */
	public Date getArticleSubmittedDate() {
		return articleSubmittedDate;
	}

	/**
	 * @param articleSubmittedDate the articleSubmittedDate to set
	 */
	public void setArticleSubmittedDate(Date articleSubmittedDate) {
		this.articleSubmittedDate = articleSubmittedDate;
	}

	/**
	 * @return the articleUpdatedDate
	 */
	public Date getArticleUpdatedDate() {
		return articleUpdatedDate;
	}

	/**
	 * @param articleUpdatedDate the articleUpdatedDate to set
	 */
	public void setArticleUpdatedDate(Date articleUpdatedDate) {
		this.articleUpdatedDate = articleUpdatedDate;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ArticleSubmissions [articleId=" + articleId + ", articleTitle=" + articleTitle + ", articleType="
				+ articleType + ", subject=" + subject + ", journalShortName=" + journalShortName + ", articleAbstract="
				+ articleAbstract + ", articleStatus=" + articleStatus + ", authorId=" + authorId + ", editorId="
				+ editorId + ", editorStatus=" + editorStatus + ", editorComments=" + editorComments
				+ ", editorUpdatedDate=" + editorUpdatedDate + ", primaryAdminComments=" + primaryAdminComments
				+ ", secondaryAdminComments=" + secondaryAdminComments + ", articleSubmittedDate="
				+ articleSubmittedDate + ", articleUpdatedDate=" + articleUpdatedDate + "]";
	}
	
	

}
