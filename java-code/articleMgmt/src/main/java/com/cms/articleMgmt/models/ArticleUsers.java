package com.cms.articleMgmt.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ARTICLEUSERS")
public class ArticleUsers implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8860354409893071117L;
	
	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="ARTICLEID")
	private Long articleId;

	@Column(name="USERNAME")
	private String userName;
	
	@Column(name="USEREMAIL")
	private String userEmail;
	
	@Column(name="APPLIATION")
	private String appliation;
	
	@Column(name="USERTYPE")
	private String userType;

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
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}

	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * @return the userEmail
	 */
	public String getUserEmail() {
		return userEmail;
	}

	/**
	 * @param userEmail the userEmail to set
	 */
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	/**
	 * @return the aPPILIATION
	 */
	public String getAppliation() {
		return appliation;
	}

	/**
	 * @param aPPILIATION the aPPILIATION to set
	 */
	public void setAppliation(String appliation) {
		this.appliation = appliation;
	}

	/**
	 * @return the userType
	 */
	public String getUserType() {
		return userType;
	}

	/**
	 * @param userType the userType to set
	 */
	public void setUserType(String userType) {
		this.userType = userType;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ArticleUsers [id=" + id + ", articleId=" + articleId + ", userName=" + userName + ", userEmail="
				+ userEmail + ", appliation=" + appliation + ", userType=" + userType + "]";
	}
	
}

