package com.cms.orgMgmt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.orgMgmt.models.OrgInfo;

public interface OrgInfoRepo extends JpaRepository<OrgInfo, Long> {
	
	OrgInfo findByInfoName(String infoName);

}
