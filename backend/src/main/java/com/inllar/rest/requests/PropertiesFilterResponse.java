package com.inllar.rest.requests;

import java.util.ArrayList;

public class PropertiesFilterResponse {
	private ArrayList<String> cep;
	private ArrayList<String> city;
	private ArrayList<String> district;
	private ArrayList<String> state;

	public PropertiesFilterResponse() {
	}

	public ArrayList<String> getCep() {
		return cep;
	}

	public void setCep(ArrayList<String> cep) {
		this.cep = cep;
	}

	public ArrayList<String> getCity() {
		return city;
	}

	public void setCity(ArrayList<String> city) {
		this.city = city;
	}

	public ArrayList<String> getDistrict() {
		return district;
	}

	public void setDistrict(ArrayList<String> district) {
		this.district = district;
	}

	public ArrayList<String> getState() {
		return state;
	}

	public void setState(ArrayList<String> state) {
		this.state = state;
	}
}
