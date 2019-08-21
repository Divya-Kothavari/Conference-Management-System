package com.cms.journalMgmt.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "abstracting")
public class Abstracting implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1083316897403921144L;

	@Id
	@Column(name = "abstractingId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long abstractingId;

	@Column(name="abstractingName")
	private String abstractingName;

	@Column(name="abstractingLogo")
	private String abstractingLogo;

	@Column(name="abstractingUrl")
	private String abstractingUrl;

	/**
	 * @return the abstractingId
	 */
	public Long getAbstractingId() {
		return abstractingId;
	}

	/**
	 * @param abstractingId the abstractingId to set
	 */
	public void setAbstractingId(Long abstractingId) {
		this.abstractingId = abstractingId;
	}

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
	 * @return the abstractingLogo
	 */
	public String getAbstractingLogo() {
		return abstractingLogo;
	}

	/**
	 * @param abstractingLogo the abstractingLogo to set
	 */
	public void setAbstractingLogo(String abstractingLogo) {
		this.abstractingLogo = abstractingLogo;
	}

	/**
	 * @return the abstractingUrl
	 */
	public String getAbstractingUrl() {
		return abstractingUrl;
	}

	/**
	 * @param abstractingUrl the abstractingUrl to set
	 */
	public void setAbstractingUrl(String abstractingUrl) {
		this.abstractingUrl = abstractingUrl;
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
		return "Abstracting [abstractingId=" + abstractingId + ", abstractingName=" + abstractingName
				+ ", abstractingLogo=" + abstractingLogo + ", abstractingUrl=" + abstractingUrl + "]";
	}
	
	
	
}
