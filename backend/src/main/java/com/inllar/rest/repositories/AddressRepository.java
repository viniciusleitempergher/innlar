package com.inllar.rest.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inllar.rest.models.Address;
import com.inllar.rest.models.Property;

@Repository
public interface AddressRepository extends JpaRepository<Address, UUID> {
	Address findByProperty(Property property);
}
