package com.inllar.rest.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inllar.rest.models.Chat;

public interface ChatRepository extends JpaRepository<Chat, UUID> {
}
