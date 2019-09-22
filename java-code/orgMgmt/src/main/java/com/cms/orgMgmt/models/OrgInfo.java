package com.cms.orgMgmt.models;

import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ORGINFO")
public class OrgInfo implements Serializable {

	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = -2532270752058239302L;

	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="INFONAME")
	private String infoName;
	
	@Column(name="INFOTYPE")
	private String infoType;
	
	@Column(name="INFODATA")
	private String infoData;
	
	@Column(name="ORGINFOIMAGEDATA")
	private byte[] orgInfoImageData;

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
	 * @return the infoType
	 */
	public String getInfoType() {
		return infoType;
	}

	/**
	 * @param infoType the infoType to set
	 */
	public void setInfoType(String infoType) {
		this.infoType = infoType;
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

	/**
	 * @return the orgInfoImageData
	 */
	public byte[] getOrgInfoImageData() {
		return orgInfoImageData;
	}

	/**
	 * @param orgInfoImageData the orgInfoImageData to set
	 */
	public void setOrgInfoImageData(byte[] orgInfoImageData) {
		this.orgInfoImageData = orgInfoImageData;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "OrgInfo [id=" + id + ", infoName=" + infoName + ", infoType=" + infoType + ", infoData=" + infoData
				+ ", orgInfoImageData=" + Arrays.toString(orgInfoImageData) + "]";
	}
	
	
	
}
