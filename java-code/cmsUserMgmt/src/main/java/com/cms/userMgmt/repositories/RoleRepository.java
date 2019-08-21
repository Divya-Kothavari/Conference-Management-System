package com.cms.userMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.userMgmt.model.Roles;

public interface RoleRepository extends JpaRepository<Roles, Long> {

	List<Roles> findAll();
	
	Roles findByRoleName(String roleName);
	
}
