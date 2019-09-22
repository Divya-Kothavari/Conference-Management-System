package com.cms.orgMgmt.beans;

public class OrgMenuBean {
	
	private Long id;
	
	private String menuName;
	
	private String menuDescription;
	
	private String menuLink;
	
	private String menuStatus;
	
	private String menuContent;
	
	private Long menuParentId;
	
	private Long menuLevel;

	
	/**
	 * @return the menuContent
	 */
	public String getMenuContent() {
		return menuContent;
	}

	/**
	 * @param menuContent the menuContent to set
	 */
	public void setMenuContent(String menuContent) {
		this.menuContent = menuContent;
	}

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
	 * @return the menuName
	 */
	public String getMenuName() {
		return menuName;
	}

	/**
	 * @param menuName the menuName to set
	 */
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	/**
	 * @return the menuDescription
	 */
	public String getMenuDescription() {
		return menuDescription;
	}

	/**
	 * @param menuDescription the menuDescription to set
	 */
	public void setMenuDescription(String menuDescription) {
		this.menuDescription = menuDescription;
	}

	/**
	 * @return the menuLink
	 */
	public String getMenuLink() {
		return menuLink;
	}

	/**
	 * @param menuLink the menuLink to set
	 */
	public void setMenuLink(String menuLink) {
		this.menuLink = menuLink;
	}

	/**
	 * @return the menuStatus
	 */
	public String getMenuStatus() {
		return menuStatus;
	}

	/**
	 * @param menuStatus the menuStatus to set
	 */
	public void setMenuStatus(String menuStatus) {
		this.menuStatus = menuStatus;
	}

	/**
	 * @return the menuParentId
	 */
	public Long getMenuParentId() {
		return menuParentId;
	}

	/**
	 * @param menuParentId the menuParentId to set
	 */
	public void setMenuParentId(Long menuParentId) {
		this.menuParentId = menuParentId;
	}

	/**
	 * @return the menuLevel
	 */
	public Long getMenuLevel() {
		return menuLevel;
	}

	/**
	 * @param menuLevel the menuLevel to set
	 */
	public void setMenuLevel(Long menuLevel) {
		this.menuLevel = menuLevel;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "OrgMenuBean [id=" + id + ", menuName=" + menuName + ", menuDescription=" + menuDescription
				+ ", menuLink=" + menuLink + ", menuStatus=" + menuStatus + ", menuContent=" + menuContent
				+ ", menuParentId=" + menuParentId + ", menuLevel=" + menuLevel + "]";
	}
	
}
