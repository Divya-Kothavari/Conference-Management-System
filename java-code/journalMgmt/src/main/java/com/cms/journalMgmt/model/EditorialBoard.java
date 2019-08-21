package com.cms.journalMgmt.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "editorialBoard")
public class EditorialBoard implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4179323493146023106L;

	@Id
	@Column(name = "editorialBoardId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long editorialBoardId;
	
	@Column(name="editorName")
	private String editorName;
	
	@Column(name="editorId")
	private String editorId;
	
	@Column(name="editorType")
	private String editorType;
	
	@Column(name="editorDescription")
	private String editorDescription;
	
	@Column(name="universityName")
	private String universityName;
	
	@Column(name="country")
	private String country;
	
	@Column(name="region")
	private String region;
	
	@Column(name="interests")
	private String interests;
	
	@Column(name="biography")
	private String biography;
	
	@Column(name="journalShortName")
	private String journalShortName;

	/**
	 * @return the editorialBoardId
	 */
	public Long getEditorialBoardId() {
		return editorialBoardId;
	}

	/**
	 * @param editorialBoardId the editorialBoardId to set
	 */
	public void setEditorialBoardId(Long editorialBoardId) {
		this.editorialBoardId = editorialBoardId;
	}

	/**
	 * @return the editorName
	 */
	public String getEditorName() {
		return editorName;
	}

	/**
	 * @param editorName the editorName to set
	 */
	public void setEditorName(String editorName) {
		this.editorName = editorName;
	}

	/**
	 * @return the editorId
	 */
	public String getEditorId() {
		return editorId;
	}

	/**
	 * @param editorId the editorId to set
	 */
	public void setEditorId(String editorId) {
		this.editorId = editorId;
	}

	/**
	 * @return the editorType
	 */
	public String getEditorType() {
		return editorType;
	}

	/**
	 * @param editorType the editorType to set
	 */
	public void setEditorType(String editorType) {
		this.editorType = editorType;
	}

	/**
	 * @return the editorDescription
	 */
	public String getEditorDescription() {
		return editorDescription;
	}

	/**
	 * @param editorDescription the editorDescription to set
	 */
	public void setEditorDescription(String editorDescription) {
		this.editorDescription = editorDescription;
	}

	/**
	 * @return the universityName
	 */
	public String getUniversityName() {
		return universityName;
	}

	/**
	 * @param universityName the universityName to set
	 */
	public void setUniversityName(String universityName) {
		this.universityName = universityName;
	}

	/**
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}

	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		this.country = country;
	}

	/**
	 * @return the region
	 */
	public String getRegion() {
		return region;
	}

	/**
	 * @param region the region to set
	 */
	public void setRegion(String region) {
		this.region = region;
	}

	/**
	 * @return the interests
	 */
	public String getInterests() {
		return interests;
	}

	/**
	 * @param interests the interests to set
	 */
	public void setInterests(String interests) {
		this.interests = interests;
	}

	/**
	 * @return the biography
	 */
	public String getBiography() {
		return biography;
	}

	/**
	 * @param biography the biography to set
	 */
	public void setBiography(String biography) {
		this.biography = biography;
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
		return "EditorialBoard [editorialBoardId=" + editorialBoardId + ", editorName=" + editorName + ", editorId="
				+ editorId + ", editorType=" + editorType + ", editorDescription=" + editorDescription
				+ ", universityName=" + universityName + ", country=" + country + ", region=" + region + ", interests="
				+ interests + ", biography=" + biography + ", journalShortName=" + journalShortName + "]";
	}
	
	
}
