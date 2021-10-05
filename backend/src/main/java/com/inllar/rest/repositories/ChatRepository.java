package com.inllar.rest.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inllar.rest.models.Chat;
import com.inllar.rest.models.Message;
import com.inllar.rest.models.User;

public interface ChatRepository extends JpaRepository<Chat, UUID> {
	boolean existsByUsersIn(List<User> users);
	
	List<Chat> findByUsersIn(List<User> users);
}
