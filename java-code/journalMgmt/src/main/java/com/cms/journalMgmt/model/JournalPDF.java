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
@Table(name = "journalpdf")
public class JournalPDF implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9193525736382047996L;
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="journalshortaname")
	private String journalShortName;

	@Column(name="filename")
	private String fileName;
	
	@Column(name="journalpdfdata")
	private byte[] journalPDFData;

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
	 * @return the journalPDFData
	 */
	public byte[] getJournalPDFData() {
		return journalPDFData;
	}

	/**
	 * @param journalPDFData the journalPDFData to set
	 */
	public void setJournalPDFData(byte[] journalPDFData) {
		this.journalPDFData = journalPDFData;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "JournalPDF [id=" + id + ", journalShortName=" + journalShortName + ", fileName=" + fileName
				+ ", journalPDFData=" + Arrays.toString(journalPDFData) + "]";
	}

}
