package com.inllar.rest.requests;

import java.io.Serializable;

public class PropertyRegisterResponse implements Serializable {
	private static final long serialVersionUID = -8947722659700579553L;

	private String propertyId;
	
	public PropertyRegisterResponse() {
	}

	public String getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(String propertyId) {
		this.propertyId = propertyId;
	}
}
