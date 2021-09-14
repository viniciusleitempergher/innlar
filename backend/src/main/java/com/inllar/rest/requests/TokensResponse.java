package com.inllar.rest.requests;

import java.io.Serializable;

public class TokensResponse implements Serializable {
	private static final long serialVersionUID = -3495239241091692730L;

	private String accessToken;
	private String refreshToken;

	public TokensResponse() {
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public String getRefreshToken() {
		return refreshToken;
	}

	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}
}
