package com.cms.journalMgmt.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "JournalAbstracting")
public class JournalAbstracting implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5523325516256844637L;

	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Column(name="abstractingName")
	private String abstractingName;
	
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

	@Column(name="journalShortName")
	private String journalShortName;

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
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "JournalAbstracting [id=" + id + ", abstractingName=" + abstractingName + ", journalShortName="
				+ journalShortName + "]";
	}

	
	
	
}
