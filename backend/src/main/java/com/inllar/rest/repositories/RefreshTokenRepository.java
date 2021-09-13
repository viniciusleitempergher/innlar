package com.inllar.rest.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inllar.rest.models.RefreshToken;
import com.inllar.rest.models.User;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, UUID> {
	boolean existsByUser(User user);

	RefreshToken findByUser(User user);
}
