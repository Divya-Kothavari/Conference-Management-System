package com.cms.articleMgmt.beans;

import java.util.List;

import com.cms.articleMgmt.models.ArticleUsers;

public class ArticleSubmissionBean {
	
	private Long articleId;
	
	private String articleTitle;
	
	private String articleType;
	
	private String subject;
	
	private String journalShortName;
	
	private String articleAbstract;
	
	private String articleStatus;
	
	private String authorId;
	
	private String editorId;
	
	private String editorStatus;
	
	private String editorComments;
	
	private String editorUpdatedDate;
	
	private String primaryAdminComments;
	
	private String secondaryAdminComments;
	
	private String submittedDate;
	
	private String articleUpdatedDate;
	
	private List<ArticleUsers> articleUsers;

	/**
	 * @return the articleUsers
	 */
	public List<ArticleUsers> getArticleUsers() {
		return articleUsers;
	}

	/**
	 * @param articleUsers the articleUsers to set
	 */
	public void setArticleUsers(List<ArticleUsers> articleUsers) {
		this.articleUsers = articleUsers;
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
	public String getEditorUpdatedDate() {
		return editorUpdatedDate;
	}

	/**
	 * @param editorUpdatedDate the editorUpdatedDate to set
	 */
	public void setEditorUpdatedDate(String editorUpdatedDate) {
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
	 * @return the submittedDate
	 */
	public String getSubmittedDate() {
		return submittedDate;
	}

	/**
	 * @param submittedDate the submittedDate to set
	 */
	public void setSubmittedDate(String submittedDate) {
		this.submittedDate = submittedDate;
	}

	/**
	 * @return the articleUpdatedDate
	 */
	public String getArticleUpdatedDate() {
		return articleUpdatedDate;
	}

	/**
	 * @param articleUpdatedDate the articleUpdatedDate to set
	 */
	public void setArticleUpdatedDate(String articleUpdatedDate) {
		this.articleUpdatedDate = articleUpdatedDate;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ArticleSubmissionBean [articleId=" + articleId + ", articleTitle=" + articleTitle + ", articleType="
				+ articleType + ", subject=" + subject + ", journalShortName=" + journalShortName + ", articleAbstract="
				+ articleAbstract + ", articleStatus=" + articleStatus + ", authorId=" + authorId + ", editorId="
				+ editorId + ", editorStatus=" + editorStatus + ", editorComments=" + editorComments
				+ ", editorUpdatedDate=" + editorUpdatedDate + ", primaryAdminComments=" + primaryAdminComments
				+ ", secondaryAdminComments=" + secondaryAdminComments + ", submittedDate=" + submittedDate
				+ ", articleUpdatedDate=" + articleUpdatedDate + "]";
	}
	
	

}
