package com.cms.articleMgmt.beans;

public class ArticleStatusBean {

	
	private String articleStatusCode;
	
	private String articleStatusDescription;

	/**
	 * @return the articleStatusCode
	 */
	public String getArticleStatusCode() {
		return articleStatusCode;
	}

	/**
	 * @param articleStatusCode the articleStatusCode to set
	 */
	public void setArticleStatusCode(String articleStatusCode) {
		this.articleStatusCode = articleStatusCode;
	}

	/**
	 * @return the articleStatusDescription
	 */
	public String getArticleStatusDescription() {
		return articleStatusDescription;
	}

	/**
	 * @param articleStatusDescription the articleStatusDescription to set
	 */
	public void setArticleStatusDescription(String articleStatusDescription) {
		this.articleStatusDescription = articleStatusDescription;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ArticleStatusBean [articleStatusCode=" + articleStatusCode + ", articleStatusDescription="
				+ articleStatusDescription + "]";
	}
	
	
}
