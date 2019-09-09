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
@Table(name = "journalflyer")
public class JournalFlyer implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3656441273789007705L;

	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="journalshortaname")
	private String journalShortName;

	@Column(name="filename")
	private String fileName;
	
	@Column(name="journalflyerdata")
	private byte[] journalFlyerData;

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
	 * @return the journalFlyerData
	 */
	public byte[] getJournalFlyerData() {
		return journalFlyerData;
	}

	/**
	 * @param journalFlyerData the journalFlyerData to set
	 */
	public void setJournalFlyerData(byte[] journalFlyerData) {
		this.journalFlyerData = journalFlyerData;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "JournalFlyer [id=" + id + ", journalShortName=" + journalShortName + ", fileName=" + fileName
				+ ", journalFlyerData=" + Arrays.toString(journalFlyerData) + "]";
	}
}
