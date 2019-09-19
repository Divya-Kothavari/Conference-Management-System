package com.cms.orgMgmt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.orgMgmt.models.OrgMenuImage;

public interface OrgMenuImageRepo extends JpaRepository<OrgMenuImage, Long> {

	OrgMenuImage findByOrgMenuId(Long menuId);
	
}
