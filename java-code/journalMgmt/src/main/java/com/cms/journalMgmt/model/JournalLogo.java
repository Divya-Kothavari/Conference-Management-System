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
@Table(name = "journallogo")
public class JournalLogo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -446642101183430417L;
	
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="journalshortaname")
	private String journalShortName;

	@Column(name="filename")
	private String fileName;
	
	@Column(name="journallogodata")
	private byte[] journalLogoData;

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
	 * @return the journalLogoData
	 */
	public byte[] getJournalLogoData() {
		return journalLogoData;
	}

	/**
	 * @param journalLogoData the journalLogoData to set
	 */
	public void setJournalLogoData(byte[] journalLogoData) {
		this.journalLogoData = journalLogoData;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "JournalLogo [id=" + id + ", journalShortName=" + journalShortName + ", fileName=" + fileName
				+ ", journalLogoData=" + Arrays.toString(journalLogoData) + "]";
	}

}
