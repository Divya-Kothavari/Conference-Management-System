package com.cms.userMgmt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.userMgmt.model.Profilepic;

public interface ProfilePicRepo extends JpaRepository<Profilepic, Long> {

	Profilepic findByUserId(String userId);
	void deleteByUserId(String userId);
}
