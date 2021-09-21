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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "properties")
public class Property {
	@Id
	@GeneratedValue(generator = "uuid4")
	@Type(type = "org.hibernate.type.PostgresUUIDType")
	@Column(name = "id", updatable = false, unique = true, nullable = false, columnDefinition = "uuid")
	private UUID id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "value", nullable = false)
	private double value;

	@Column(name = "number_bathrooms", nullable = false)
	private int numberBathRooms;

	@Column(name = "number_bedrooms", nullable = false)
	private int numberBedRooms;

	@Column(name = "number_kitchens", nullable = false)
	private int numberKitchens;

	@Column(name = "square_meters", nullable = false)
	private double squareMeters;

	@Column(name = "has_pool", nullable = false)
	private boolean hasPool;

	@Column(name = "has_party_area", nullable = false)
	private boolean hasPartyArea;

	@Column(name = "has_grill", nullable = false)
	private boolean hasGrill;

	@Column(name = "has_garage", nullable = false)
	private boolean hasGarage;

	@Column(name = "description", nullable = true)
	private String description;

	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User user;

	@OneToMany(mappedBy = "property")
	private List<Image> images;

	@OneToOne(mappedBy = "property")
	private Address address;

	@JsonIgnore
	public Property getPropertyData() {
		Property property = new Property();

		property.setAddress(address);
		property.setDescription(description);
		property.setHasGarage(hasGarage);
		property.setHasGrill(hasGrill);
		property.setHasPartyArea(hasPartyArea);
		property.setHasPool(hasPool);
		property.setId(id);
		property.setImages(images);
		property.setName(name);
		property.setNumberBathRooms(numberBathRooms);
		property.setNumberBedRooms(numberBedRooms);
		property.setNumberKitchens(numberKitchens);
		property.setSquareMeters(squareMeters);
		property.setUser(user);
		property.setValue(value);
		property.setUser(this.user.getUserData());
		property.getUser().setProperties(null);
		property.getAddress().setProperty(null);
		property.getImages().forEach((Image image) -> {
			image.setProperty(null);
		});

		return property;
	}

	public Property() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public double getValue() {
		return this.value;
	}

	public void setValue(double value) {
		this.value = value;
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

	public int getNumberBedRooms() {
		return numberBedRooms;
	}

	public void setNumberBedRooms(int numberBedRooms) {
		this.numberBedRooms = numberBedRooms;
	}

	public int getNumberKitchens() {
		return numberKitchens;
	}

	public void setNumberKitchens(int numberKitchens) {
		this.numberKitchens = numberKitchens;
	}

	public boolean isHasPartyArea() {
		return hasPartyArea;
	}

	public void setHasPartyArea(boolean hasPartyArea) {
		this.hasPartyArea = hasPartyArea;
	}

	public boolean isHasGrill() {
		return hasGrill;
	}

	public void setHasGrill(boolean hasGrill) {
		this.hasGrill = hasGrill;
	}

	public boolean isHasGarage() {
		return hasGarage;
	}

	public void setHasGarage(boolean hasGarage) {
		this.hasGarage = hasGarage;
	}
}
