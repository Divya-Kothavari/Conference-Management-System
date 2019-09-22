package com.cms.orgMgmt.beans;

public class OrgInfoBean {

	private String infoName;
	
	private String infoData;

	/**
	 * @return the infoName
	 */
	public String getInfoName() {
		return infoName;
	}

	/**
	 * @param infoName the infoName to set
	 */
	public void setInfoName(String infoName) {
		this.infoName = infoName;
	}

	/**
	 * @return the infoData
	 */
	public String getInfoData() {
		return infoData;
	}

	/**
	 * @param infoData the infoData to set
	 */
	public void setInfoData(String infoData) {
		this.infoData = infoData;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "OrgInfoBean [infoName=" + infoName + ", infoData=" + infoData + "]";
	}
	
	
}
