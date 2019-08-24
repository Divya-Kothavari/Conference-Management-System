package com.cms.locations.beans;

public class CountryBean {
	
	private Long countryId;
	private String regionCode;
	private String countryCode;
	private String countryName;
	private String description;
	private String economicStatus;
	
	
	/**
	 * @return the economicStatus
	 */
	public String getEconomicStatus() {
		return economicStatus;
	}
	/**
	 * @param economicStatus the economicStatus to set
	 */
	public void setEconomicStatus(String economicStatus) {
		this.economicStatus = economicStatus;
	}
	/**
	 * @return the countryId
	 */
	public Long getCountryId() {
		return countryId;
	}
	/**
	 * @param countryId the countryId to set
	 */
	public void setCountryId(Long countryId) {
		this.countryId = countryId;
	}
	/**
	 * @return the regionCode
	 */
	public String getRegionCode() {
		return regionCode;
	}
	/**
	 * @param regionCode the regionCode to set
	 */
	public void setRegionCode(String regionCode) {
		this.regionCode = regionCode;
	}
	/**
	 * @return the countryCode
	 */
	public String getCountryCode() {
		return countryCode;
	}
	/**
	 * @param countryCode the countryCode to set
	 */
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	/**
	 * @return the countryName
	 */
	public String getCountryName() {
		return countryName;
	}
	/**
	 * @param countryName the countryName to set
	 */
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}
	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}
	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "CountryBean [countryId=" + countryId + ", regionCode=" + regionCode + ", countryCode=" + countryCode
				+ ", countryName=" + countryName + ", description=" + description + ", economicStatus=" + economicStatus
				+ "]";
	}

}
