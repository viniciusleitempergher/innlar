package com.inllar.rest.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inllar.rest.models.Message;

public interface ChatRepository extends JpaRepository<Message, UUID> {
	boolean existsByEmail(String email);
}
