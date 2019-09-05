package com.cms.journalMgmt.model;

import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "journalbanner")
public class JournalBanner implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1722449529678605138L;

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="journalshortaname")
	private String journalShortName;

	@Column(name="filename")
	private String fileName;
	
	@Column(name="journalbannerdata")
	private byte[] journalBannerData;

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
	 * @return the journalShortName
	 */
	public String getJournalShortName() {
		return journalShortName;
	}

	/**
	 * @param journalShortName the journalShortName to set
	 */
	public void setJournalShortName(String journalShortName) {
		this.journalShortName = journalShortName;
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
	 * @return the journalBannerData
	 */
	public byte[] getJournalBannerData() {
		return journalBannerData;
	}

	/**
	 * @param journalBannerData the journalBannerData to set
	 */
	public void setJournalBannerData(byte[] journalBannerData) {
		this.journalBannerData = journalBannerData;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "JournalBanner [id=" + id + ", journalShortName=" + journalShortName + ", fileName=" + fileName
				+ ", journalBannerData=" + Arrays.toString(journalBannerData) + "]";
	}
	
	
}
