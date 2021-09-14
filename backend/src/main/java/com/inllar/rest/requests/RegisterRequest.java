package com.inllar.rest.requests;

import java.io.Serializable;

public class RegisterRequest implements Serializable {

	private static final long serialVersionUID = -4567996407657887860L;
	private String name;
	private String email;
	private String password;
	private String phoneNumber;

	public RegisterRequest() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}
