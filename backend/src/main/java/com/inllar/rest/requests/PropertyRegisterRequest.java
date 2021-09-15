package com.inllar.rest.requests;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

public class PropertyRegisterRequest implements Serializable {
	private static final long serialVersionUID = 3031371885274757967L;

	private String name;
	private int numberRooms;
	private int numberBathRooms;
	private int numberBedRooms;
	private int numberKitchens;
	private double squareMeters;
	private boolean hasPool;
	private boolean hasPartyArea;
	private boolean hasGrill;
	private boolean hasGarage;
	private String description;

	private int number;
	private String street;
	private String district;
	private String cep;
	private String city;
	private String state;

	private List<MultipartFile> images;

	private UUID userId;

	public PropertyRegisterRequest() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public List<MultipartFile> getImages() {
		return images;
	}

	public void setImages(List<MultipartFile> images) {
		this.images = images;
	}

	public UUID getUserId() {
		return userId;
	}

	public void setUserId(UUID userId) {
		this.userId = userId;
	}
}