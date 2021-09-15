package com.inllar.rest.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inllar.rest.requests.PropertyGetRequest;
import com.inllar.rest.requests.PropertyGetResponse;
import com.inllar.rest.requests.PropertyRegisterRequest;
import com.inllar.rest.requests.PropertyRegisterResponse;
import com.inllar.rest.services.PropertyService;

@CrossOrigin
@RestController
@RequestMapping(value = "/properties")
public class PropertyController {

	@Resource(name = "propertyService")
	private PropertyService propertyService;

	@PostMapping("/create")
	public PropertyRegisterResponse createProperty(@RequestBody PropertyRegisterRequest request) {
		try {
			return propertyService.createProperty(request);
		} catch (Exception e) {
			throw e;
		}
	}

//	@GetMapping
//	public PropertiesResponse getProperties() {
//
//	}

	@GetMapping("/get-by-id")
	public PropertyGetResponse getProperty(@RequestBody PropertyGetRequest request) {
		
	}
}
