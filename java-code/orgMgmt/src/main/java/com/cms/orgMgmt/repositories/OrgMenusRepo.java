package com.cms.orgMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.orgMgmt.models.OrgMenus;

public interface OrgMenusRepo extends JpaRepository<OrgMenus, Long> {
	
	OrgMenus findByMenuName(String menuName);
	
	List<OrgMenus> findByMenuParentId(Long id);
	
	List<OrgMenus> findByMenuLevel(Long level);
	
	List<OrgMenus> findByMenuLevelAndMenuStatus(Long level,String menuStatus);
	
	List<OrgMenus> findByMenuStatus(String menuStatus);
}
