package com.cms.journalMgmt.beans;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class SubjectBean {
	
	private String subjectName;

	private String subjectDescription;

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
		return "SubjectBean [subjectName=" + subjectName + ", subjectDescription=" + subjectDescription + "]";
	}

	

}
