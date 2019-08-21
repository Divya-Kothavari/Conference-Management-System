package com.cms.userMgmt.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.userMgmt.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

	User findByUserId(String userId);
	
	List<User> findAll();
}
