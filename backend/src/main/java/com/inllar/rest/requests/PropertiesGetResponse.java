package com.inllar.rest.requests;

import java.io.Serializable;
import java.util.List;

import com.inllar.rest.models.Property;

public class PropertiesGetResponse implements Serializable {
	private static final long serialVersionUID = 4859715511761107003L;

	private List<Property> properties;

	public List<Property> getProperties() {
		return properties;
	}

	public void setProperties(List<Property> properties) {
		this.properties = properties;
	}
}
