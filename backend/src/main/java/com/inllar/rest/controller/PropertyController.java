package com.inllar.rest.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.inllar.rest.models.Address;
import com.inllar.rest.models.Property;
import com.inllar.rest.repositories.AddressRepository;
import com.inllar.rest.requests.PropertiesFilterResponse;
import com.inllar.rest.requests.PropertiesGetResponse;
import com.inllar.rest.requests.PropertyRegisterRequest;
import com.inllar.rest.requests.PropertyRegisterResponse;
import com.inllar.rest.services.PropertyService;

import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@CrossOrigin
@RestController
@SecurityRequirement(name = "accesstoken")
@RequestMapping(value = "/properties")
public class PropertyController {

	@Resource(name = "propertyService")
	private PropertyService propertyService;
	@Autowired
	private AddressRepository addressRepository;

	@ApiOperation("Endpoint used to create new properties")
	@PostMapping("/create")
	public PropertyRegisterResponse createProperty(@RequestBody PropertyRegisterRequest request) {
		try {
			return propertyService.createProperty(request);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation("Endpoint used to upload property images")
	@PostMapping("/images")
	public void uploadImages(@RequestParam("images") MultipartFile[] files,
			@RequestParam("propertyId") String propertyId) throws Exception {
		try {
			propertyService.saveImages(files, propertyId);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation("Endpoint used to search properties by the address")
	@GetMapping("/search")
	public PropertiesGetResponse getProperties(@RequestParam String cep, @RequestParam String city,
			@RequestParam String district, @RequestParam String state) {
		try {
			PropertiesGetResponse response = propertyService.getPropertiesByAddress(cep, city, district, state);

			return response;
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation("Endpoint used to get the current CEPs, cities, states and districts registered in the database")
	@GetMapping("/search-filters")
	public PropertiesFilterResponse getPropertiesSearchFilters() {
		try {
			return propertyService.getSearchFilters();
		} catch (Exception e) {
			throw e;
		}
	}

//	@GetMapping("/get-by-id")
//	public PropertyGetResponse getProperty(@RequestBody PropertyGetRequest request) {
//		
//	}
}
