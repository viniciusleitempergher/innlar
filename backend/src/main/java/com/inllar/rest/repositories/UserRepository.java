package com.inllar.rest.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inllar.rest.models.User;

public interface UserRepository extends JpaRepository<User, UUID> {
	boolean existsByEmail(String email);

	User findByEmail(String email);
}
