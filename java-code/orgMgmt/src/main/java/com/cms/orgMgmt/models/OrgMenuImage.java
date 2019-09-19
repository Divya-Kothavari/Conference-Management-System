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
@Table(name = "ORGMENUIMAGE")
public class OrgMenuImage implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6017612587459540171L;
	
	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name="ORGMENUID")
	private Long orgMenuId;
	
	@Column(name="FILENAME")
	private String fileName;
	
	@Column(name="ORGMENUIMAGEDATA")
	private byte[] orgMenuImageData;

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
	 * @return the orgMenuId
	 */
	public Long getOrgMenuId() {
		return orgMenuId;
	}

	/**
	 * @param orgMenuId the orgMenuId to set
	 */
	public void setOrgMenuId(Long orgMenuId) {
		this.orgMenuId = orgMenuId;
	}

	/**
	 * @return the fileName
	 */
	public String getFileName() {
		return fileName;
	}

	/**
	 * @param fileName the fileName to set
	 */
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	/**
	 * @return the orgMenuImageData
	 */
	public byte[] getOrgMenuImageData() {
		return orgMenuImageData;
	}

	/**
	 * @param orgMenuImageData the orgMenuImageData to set
	 */
	public void setOrgMenuImageData(byte[] orgMenuImageData) {
		this.orgMenuImageData = orgMenuImageData;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "OrgMenuImage [id=" + id + ", orgMenuId=" + orgMenuId + ", fileName=" + fileName + ", orgMenuImageData="
				+ Arrays.toString(orgMenuImageData) + "]";
	}
	
}
