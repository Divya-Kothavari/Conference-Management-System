package com.cms.journalMgmt.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "journalsubject")
public class JournalSubject implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5623883594590904929L;
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="subjectname")
	private String subjectName;
	
	@Column(name="journalshortname")
	private String journalShortName;

	/**
	 * @return the subjectId
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param subjectId the subjectId to set
	 */
	public void setSubjectId(Long id) {
		this.id = id;
	}

	/**
	 * @return the subjectName
	 */
	public String getSubjectName() {
		return subjectName;
	}

	/**
	 * @param subjectName the subjectName to set
	 */
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
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

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "JournalSubject [id=" + id + ", subjectName=" + subjectName + ", journalShortName="
				+ journalShortName + "]";
	}

}
