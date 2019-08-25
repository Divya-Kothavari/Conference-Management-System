package com.cms.journalMgmt.beans;

public class ArticleTypeBean {

	private Long id;
	
	private String articleType;

	private String articleTypeDescription;
	
	
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
		return "ArticleType [articleType=" + articleType + ", articleTypeDescription="
				+ articleTypeDescription + "]";
	}
	
	

	
}
