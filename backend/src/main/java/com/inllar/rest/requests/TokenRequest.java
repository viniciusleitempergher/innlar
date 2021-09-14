package com.inllar.rest.requests;

import java.io.Serializable;

public class TokenRequest implements Serializable {
	private static final long serialVersionUID = 4983849669664328281L;

	private String token;

	public TokenRequest() {
	}

	public String getToken() {
		return this.token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
