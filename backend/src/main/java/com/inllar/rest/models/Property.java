package com.inllar.rest.models;

import java.util.List;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.Type;

@Entity(name = "properties")
public class Property {
	@Id
	@GeneratedValue(generator = "uuid4")
	@Type(type = "org.hibernate.type.PostgresUUIDType")
	@Column(name = "id", updatable = false, unique = true, nullable = false, columnDefinition = "uuid")
	private UUID id;

	@Column(name = "number_rooms", nullable = false)
	private int numberRooms;

	@Column(name = "number_bathrooms", nullable = false)
	private int numberBathRooms;

	@Column(name = "square_meters", nullable = false)
	private double squareMeters;

	@Column(name = "hasPool", nullable = false)
	private boolean hasPool;

	@Column(name = "description", nullable = false)
	private String description;

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;

	@OneToMany(mappedBy = "property")
	private List<Image> images;

	@OneToOne(mappedBy = "property")
	private Address address;

	public Property() {
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public int getNumberRooms() {
		return numberRooms;
	}

	public void setNumberRooms(int numberRooms) {
		this.numberRooms = numberRooms;
	}

	public int getNumberBathRooms() {
		return numberBathRooms;
	}

	public void setNumberBathRooms(int numberBathRooms) {
		this.numberBathRooms = numberBathRooms;
	}

	public double getSquareMeters() {
		return squareMeters;
	}

	public void setSquareMeters(double squareMeters) {
		this.squareMeters = squareMeters;
	}

	public boolean isHasPool() {
		return hasPool;
	}

	public void setHasPool(boolean hasPool) {
		this.hasPool = hasPool;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
}
