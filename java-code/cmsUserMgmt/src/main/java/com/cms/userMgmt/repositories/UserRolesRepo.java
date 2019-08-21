package com.cms.userMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.userMgmt.model.UserRoles;

public interface UserRolesRepo extends JpaRepository<UserRoles, Long> {

	List<UserRoles> findByUserId(String userId);
}
