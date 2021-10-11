package com.inllar.rest.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.inllar.rest.models.Chat;
import com.inllar.rest.models.Message;
import com.inllar.rest.models.User;

public interface ChatRepository extends JpaRepository<Chat, UUID> {
	@Query("select * from users u inner join chats_users c_u where u.id = c_u.users_id")
	boolean existsByUsers(List<User> users);

	@Query("select * from users u inner join chats_users c_u where u.id = c_u.users_id")
	List<Chat> findByUsers(List<User> users);
}
