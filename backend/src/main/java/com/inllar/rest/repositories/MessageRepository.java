package com.inllar.rest.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inllar.rest.models.Message;

public interface MessageRepository extends JpaRepository<Message, UUID> {

}
