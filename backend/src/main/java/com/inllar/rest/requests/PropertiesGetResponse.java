package com.inllar.rest.requests;

import java.io.Serializable;
import java.util.ArrayList;

import com.inllar.rest.models.Property;

public class PropertiesGetResponse implements Serializable {
	private static final long serialVersionUID = 4859715511761107003L;

	private ArrayList<Property> properties;

	public PropertiesGetResponse() {

	}

	public ArrayList<Property> getProperties() {
		return properties;
	}

	public void setProperties(ArrayList<Property> properties) {
		this.properties = properties;
	}
}
