package com.cms.userMgmt.beans;

public class PasswordResetReq {
	
	private String userId;
	
	private String cPassword;
	
	private String nPassword;
	
	private String nPasswordConf;

	/**
	 * @return the userId
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * @return the cPassword
	 */
	public String getcPassword() {
		return cPassword;
	}

	/**
	 * @param cPassword the cPassword to set
	 */
	public void setcPassword(String cPassword) {
		this.cPassword = cPassword;
	}

	/**
	 * @return the nPassword
	 */
	public String getnPassword() {
		return nPassword;
	}

	/**
	 * @param nPassword the nPassword to set
	 */
	public void setnPassword(String nPassword) {
		this.nPassword = nPassword;
	}
	
	/**
	 * @return the nPassword
	 */
	public String getnPasswordConf() {
		return nPasswordConf;
	}

	/**
	 * @param nPassword the nPassword to set
	 */
	public void setnPasswordConf(String nPasswordConf) {
		this.nPasswordConf = nPasswordConf;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "PasswordResetReq [userId=" + userId + ", cPassword=" + cPassword + ", nPassword=" + nPassword
				+ ", nPasswordConf=" + nPasswordConf + "]";
	}

}
