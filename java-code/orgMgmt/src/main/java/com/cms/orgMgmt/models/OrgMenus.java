package com.cms.orgMgmt.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ORGMENUS")
public class OrgMenus implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7500508875819968206L;
	
	@Id
	@Column(name="ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="MENUNAME")
	private String menuName;
	
	@Column(name="MENUDESCRIPTION")
	private String menuDescription;

	@Column(name="MENULINK")
	private String menuLink;
	
	@Column(name="MENUSTATUS")
	private String menuStatus;
	
	@Column(name="MENUPARENTID")
	private Long menuParentId;
	
	@Column(name="MENULEVEL")
	private Long menuLevel;

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
	 * @return the menuParentID
	 */
	public Long getMenuParentId() {
		return menuParentId;
	}

	/**
	 * @param menuParentID the menuParentID to set
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
		return "OrgMenus [id=" + id + ", menuName=" + menuName + ", menuDescription=" + menuDescription + ", menuLink="
				+ menuLink + ", menuStatus=" + menuStatus + ", menuParentId=" + menuParentId + ", menuLevel="
				+ menuLevel + "]";
	}
	
}
