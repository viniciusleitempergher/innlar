package com.inllar.rest.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inllar.rest.models.Image;
import com.inllar.rest.models.Property;

public interface ImageRepository extends JpaRepository<Image, UUID> {
	List<Image> findByProperty(Property property);
}
