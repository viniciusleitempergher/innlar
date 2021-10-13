package com.inllar.rest.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.inllar.rest.models.Chat;
import com.inllar.rest.models.Message;
import com.inllar.rest.models.User;

public interface ChatRepository extends JpaRepository<Chat, UUID> {
}
