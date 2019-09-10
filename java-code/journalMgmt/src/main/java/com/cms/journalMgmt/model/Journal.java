package com.cms.journalMgmt.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "journal")
public class Journal implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7400083532602365735L;
	
	@Id
	@Column(name = "journalId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long journalId;
	
	@Column(name="journalName")
	private String journalName;
	
	@Column(name="journalShortName")
	private String journalShortName;
	
	@Column(name="journalEmail")
	private String journalEmail;
	
	@Column(name="ISSNNumber")
	private String issnNumber;
	
	@Column(name="ISPNNumber")
	private String ispnNumber;
	
	@Column(name="aboutJournal")
	private String aboutJournal;
	
	@Column(name="aimAndScope")
	private String aimAndScope;
	
	@Column(name="articleInPressText")
	private String articleInPressText;
	
	@Column(name="currentIssueText")
	private String currentIssueText;
	
	@Column(name="archievePageText")
	private String archievePageText;
	
	@Column(name="guidlines")
	private String guidlines;
	
	@Column(name="articleProcessingCharge")
	private Long articleProcessingCharge;
	
	@Column(name="journalBanner")
	private String journalBanner;
	
	@Column(name="journalFlier")
	private String journalFlier;
	
	@Column(name="journalPDF")
	private String journalPDF;
	
	@Column(name="fbLink")
	private String fbLink;
	
	@Column(name="twitterLink")
	private String twitterLink;
	
	@Column(name="linkedinLink")
	private String linkedinLink;
	
	@Column(name="journalPrimaryAdmin")
	private String journalPrimaryAdmin;
	
	@Column(name="journalSecondaryAdmin")
	private String journalSecondaryAdmin;
	
	@Column(name="reviewStatus")
	private String reviewStatus;
	
	@Column(name="journalStatus")
	private String journalStatus;
	
	@Column(name="journalCreatedDate")
	private Date journalCreatedDate;
	
	@Column(name="journalUpdatedDate")
	private Date journalUpdatedDate;

	/**
	 * @return the journalId
	 */
	public Long getJournalId() {
		return journalId;
	}

	/**
	 * @param journalId the journalId to set
	 */
	public void setJournalId(Long journalId) {
		this.journalId = journalId;
	}

	/**
	 * @return the journalName
	 */
	public String getJournalName() {
		return journalName;
	}

	/**
	 * @param journalName the journalName to set
	 */
	public void setJournalName(String journalName) {
		this.journalName = journalName;
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
	 * @return the journalEmail
	 */
	public String getJournalEmail() {
		return journalEmail;
	}

	/**
	 * @param journalEmail the journalEmail to set
	 */
	public void setJournalEmail(String journalEmail) {
		this.journalEmail = journalEmail;
	}

	/**
	 * @return the issnNumber
	 */
	public String getIssnNumber() {
		return issnNumber;
	}

	/**
	 * @param issnNumber the issnNumber to set
	 */
	public void setIssnNumber(String issnNumber) {
		this.issnNumber = issnNumber;
	}

	/**
	 * @return the ispnNumber
	 */
	public String getIspnNumber() {
		return ispnNumber;
	}

	/**
	 * @param ispnNumber the ispnNumber to set
	 */
	public void setIspnNumber(String ispnNumber) {
		this.ispnNumber = ispnNumber;
	}

	/**
	 * @return the aboutJournal
	 */
	public String getAboutJournal() {
		return aboutJournal;
	}

	/**
	 * @param aboutJournal the aboutJournal to set
	 */
	public void setAboutJournal(String aboutJournal) {
		this.aboutJournal = aboutJournal;
	}

	/**
	 * @return the aimAndScope
	 */
	public String getAimAndScope() {
		return aimAndScope;
	}

	/**
	 * @param aimAndScope the aimAndScope to set
	 */
	public void setAimAndScope(String aimAndScope) {
		this.aimAndScope = aimAndScope;
	}

	/**
	 * @return the articleInPressText
	 */
	public String getArticleInPressText() {
		return articleInPressText;
	}

	/**
	 * @param articleInPressText the articleInPressText to set
	 */
	public void setArticleInPressText(String articleInPressText) {
		this.articleInPressText = articleInPressText;
	}

	/**
	 * @return the currentIssueText
	 */
	public String getCurrentIssueText() {
		return currentIssueText;
	}

	/**
	 * @param currentIssueText the currentIssueText to set
	 */
	public void setCurrentIssueText(String currentIssueText) {
		this.currentIssueText = currentIssueText;
	}

	/**
	 * @return the archievePageText
	 */
	public String getArchievePageText() {
		return archievePageText;
	}

	/**
	 * @param archievePageText the archievePageText to set
	 */
	public void setArchievePageText(String archievePageText) {
		this.archievePageText = archievePageText;
	}

	/**
	 * @return the guidlines
	 */
	public String getGuidlines() {
		return guidlines;
	}

	/**
	 * @param guidlines the guidlines to set
	 */
	public void setGuidlines(String guidlines) {
		this.guidlines = guidlines;
	}

	/**
	 * @return the articleProcessingCharge
	 */
	public Long getArticleProcessingCharge() {
		return articleProcessingCharge;
	}

	/**
	 * @param articleProcessingCharge the articleProcessingCharge to set
	 */
	public void setArticleProcessingCharge(Long articleProcessingCharge) {
		this.articleProcessingCharge = articleProcessingCharge;
	}

	/**
	 * @return the journalBanner
	 */
	public String getJournalBanner() {
		return journalBanner;
	}

	/**
	 * @param journalBanner the journalBanner to set
	 */
	public void setJournalBanner(String journalBanner) {
		this.journalBanner = journalBanner;
	}

	/**
	 * @return the journalFlier
	 */
	public String getJournalFlier() {
		return journalFlier;
	}

	/**
	 * @param journalFlier the journalFlier to set
	 */
	public void setJournalFlier(String journalFlier) {
		this.journalFlier = journalFlier;
	}

	/**
	 * @return the journalPDF
	 */
	public String getJournalPDF() {
		return journalPDF;
	}

	/**
	 * @param journalPDF the journalPDF to set
	 */
	public void setJournalPDF(String journalPDF) {
		this.journalPDF = journalPDF;
	}

	/**
	 * @return the fbLink
	 */
	public String getFbLink() {
		return fbLink;
	}

	/**
	 * @param fbLink the fbLink to set
	 */
	public void setFbLink(String fbLink) {
		this.fbLink = fbLink;
	}

	/**
	 * @return the twitterLink
	 */
	public String getTwitterLink() {
		return twitterLink;
	}

	/**
	 * @param twitterLink the twitterLink to set
	 */
	public void setTwitterLink(String twitterLink) {
		this.twitterLink = twitterLink;
	}

	/**
	 * @return the linkedinLink
	 */
	public String getLinkedinLink() {
		return linkedinLink;
	}

	/**
	 * @param linkedinLink the linkedinLink to set
	 */
	public void setLinkedinLink(String linkedinLink) {
		this.linkedinLink = linkedinLink;
	}

	/**
	 * @return the journalPrimaryAdmin
	 */
	public String getJournalPrimaryAdmin() {
		return journalPrimaryAdmin;
	}

	/**
	 * @param journalPrimaryAdmin the journalPrimaryAdmin to set
	 */
	public void setJournalPrimaryAdmin(String journalPrimaryAdmin) {
		this.journalPrimaryAdmin = journalPrimaryAdmin;
	}

	/**
	 * @return the journalSecondaryAdmin
	 */
	public String getJournalSecondaryAdmin() {
		return journalSecondaryAdmin;
	}

	/**
	 * @param journalSecondaryAdmin the journalSecondaryAdmin to set
	 */
	public void setJournalSecondaryAdmin(String journalSecondaryAdmin) {
		this.journalSecondaryAdmin = journalSecondaryAdmin;
	}

	/**
	 * @return the reviewStatus
	 */
	public String getReviewStatus() {
		return reviewStatus;
	}

	/**
	 * @param reviewStatus the reviewStatus to set
	 */
	public void setReviewStatus(String reviewStatus) {
		this.reviewStatus = reviewStatus;
	}

	/**
	 * @return the journalStatus
	 */
	public String getJournalStatus() {
		return journalStatus;
	}

	/**
	 * @param journalStatus the journalStatus to set
	 */
	public void setJournalStatus(String journalStatus) {
		this.journalStatus = journalStatus;
	}

	/**
	 * @return the journalCreatedDate
	 */
	public Date getJournalCreatedDate() {
		return journalCreatedDate;
	}

	/**
	 * @param journalCreatedDate the journalCreatedDate to set
	 */
	public void setJournalCreatedDate(Date journalCreatedDate) {
		this.journalCreatedDate = journalCreatedDate;
	}

	/**
	 * @return the journalUpdatedDate
	 */
	public Date getJournalUpdatedDate() {
		return journalUpdatedDate;
	}

	/**
	 * @param journalUpdatedDate the journalUpdatedDate to set
	 */
	public void setJournalUpdatedDate(Date journalUpdatedDate) {
		this.journalUpdatedDate = journalUpdatedDate;
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
		return "Journal [journalId=" + journalId + ", journalName=" + journalName + ", journalShortName="
				+ journalShortName + ", journalEmail=" + journalEmail + ", issnNumber=" + issnNumber + ", ispnNumber="
				+ ispnNumber + ", aboutJournal=" + aboutJournal + ", aimAndScope=" + aimAndScope
				+ ", articleInPressText=" + articleInPressText + ", currentIssueText=" + currentIssueText
				+ ", archievePageText=" + archievePageText + ", guidlines=" + guidlines + ", articleProcessingCharge="
				+ articleProcessingCharge + ", journalBanner=" + journalBanner + ", journalFlier=" + journalFlier
				+ ", journalPDF=" + journalPDF + ", fbLink=" + fbLink + ", twitterLink=" + twitterLink
				+ ", linkedinLink=" + linkedinLink + ", journalPrimaryAdmin=" + journalPrimaryAdmin
				+ ", journalSecondaryAdmin=" + journalSecondaryAdmin + ", reviewStatus=" + reviewStatus
				+ ", journalStatus=" + journalStatus + ", journalCreatedDate=" + journalCreatedDate
				+ ", journalUpdatedDate=" + journalUpdatedDate + "]";
	}

	
	
}