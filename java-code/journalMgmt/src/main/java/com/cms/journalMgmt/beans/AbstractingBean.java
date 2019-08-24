package com.cms.journalMgmt.beans;



public class AbstractingBean {
	
	private String abstractingName;

	private String abstractingLogo;

	private String abstractingUrl;
	
	/**
	 * @return the abstractingName
	 */
	public String getAbstractingName() {
		return abstractingName;
	}

	/**
	 * @param abstractingName the abstractingName to set
	 */
	public void setAbstractingName(String abstractingName) {
		this.abstractingName = abstractingName;
	}

	/**
	 * @return the abstractingLogo
	 */
	public String getAbstractingLogo() {
		return abstractingLogo;
	}

	/**
	 * @param abstractingLogo the abstractingLogo to set
	 */
	public void setAbstractingLogo(String abstractingLogo) {
		this.abstractingLogo = abstractingLogo;
	}

	/**
	 * @return the abstractingUrl
	 */
	public String getAbstractingUrl() {
		return abstractingUrl;
	}

	/**
	 * @param abstractingUrl the abstractingUrl to set
	 */
	public void setAbstractingUrl(String abstractingUrl) {
		this.abstractingUrl = abstractingUrl;
	}


	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Abstracting [abstractingName=" + abstractingName
				+ ", abstractingLogo=" + abstractingLogo + ", abstractingUrl=" + abstractingUrl + "]";
	}
}
