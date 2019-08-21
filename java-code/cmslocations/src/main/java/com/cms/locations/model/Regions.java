package com.cms.locations.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "REGIONS")
public class Regions implements Serializable {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2000988942498817098L;

	@Id
	@Column(name = "regionId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long regionId;
	
	@Column(name = "regionCode")
	private String regionCode;
	
	@Column(name="regionName")
	private String regionName;

	@Column(name="description")
	private String description;
	
	/**
	 * @return the regionId
	 */
	public Long getRegionId() {
		return regionId;
	}

	/**
	 * @param regionId the regionId to set
	 */
	public void setRegionId(Long regionId) {
		this.regionId = regionId;
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
	 * @return the regionName
	 */
	public String getRegionName() {
		return regionName;
	}

	/**
	 * @param regionName the regionName to set
	 */
	public void setRegionName(String regionName) {
		this.regionName = regionName;
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
		return "Regions [regionId=" + regionId + ", regionCode=" + regionCode + ", regionName=" + regionName
				+ ", description=" + description + "]";
	}

	

}
