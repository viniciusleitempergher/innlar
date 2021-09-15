package com.inllar.rest.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inllar.rest.models.Property;
import com.inllar.rest.models.User;

@Repository
public interface PropertyRepository extends JpaRepository<Property, UUID> {
	Property findByUser(User user);
}
