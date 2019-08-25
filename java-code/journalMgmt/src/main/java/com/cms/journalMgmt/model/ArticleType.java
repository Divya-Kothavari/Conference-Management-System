package com.cms.journalMgmt.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "articletype")
public class ArticleType implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1589931462271506463L;
	
	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="articletype")
	private String articleType;

	@Column(name="articletypedescription")
	private String articleTypeDescription;
	
	
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
	 * @return the articleTypeDescription
	 */
	public String getArticleTypeDescription() {
		return articleTypeDescription;
	}

	/**
	 * @param articleTypeDescription the articleTypeDescription to set
	 */
	public void setArticleTypeDescription(String articleTypeDescription) {
		this.articleTypeDescription = articleTypeDescription;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ArticleType [id=" + id + ", articleType=" + articleType + ", articleTypeDescription="
				+ articleTypeDescription + "]";
	}
	
	
}
