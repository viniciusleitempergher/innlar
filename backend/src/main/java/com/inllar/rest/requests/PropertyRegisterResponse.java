package com.inllar.rest.requests;

import java.io.Serializable;

public class PropertyRegisterResponse implements Serializable {
	private static final long serialVersionUID = -8947722659700579553L;

	private String name;
	private String imageUrl;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
}
