package com.cms.journalMgmt.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "subjects")
public class Subject implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3903435656703103853L;

	@Id
	@Column(name = "subjectId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long subjectId;
	
	@Column(name="subjectName")
	private String subjectName;

	@Column(name="subjectDescription")
	private String subjectDescription;

	/**
	 * @return the subjectId
	 */
	public Long getSubjectId() {
		return subjectId;
	}

	/**
	 * @param subjectId the subjectId to set
	 */
	public void setSubjectId(Long subjectId) {
		this.subjectId = subjectId;
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
	 * @return the subjectDescription
	 */
	public String getSubjectDescription() {
		return subjectDescription;
	}

	/**
	 * @param subjectDescription the subjectDescription to set
	 */
	public void setSubjectDescription(String subjectDescription) {
		this.subjectDescription = subjectDescription;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Subject [subjectId=" + subjectId + ", subjectName=" + subjectName + ", subjectDescription="
				+ subjectDescription + "]";
	}	
	
	
	
}
