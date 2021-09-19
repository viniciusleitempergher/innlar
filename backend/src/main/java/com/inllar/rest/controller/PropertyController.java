package com.inllar.rest.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.inllar.rest.requests.PropertyRegisterRequest;
import com.inllar.rest.requests.PropertyRegisterResponse;
import com.inllar.rest.services.PropertyService;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@CrossOrigin
@RestController
@SecurityRequirement(name = "accesstoken")
@RequestMapping(value = "/properties")
public class PropertyController {

	@Resource(name = "propertyService")
	private PropertyService propertyService;

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

//	@GetMapping
//	public PropertiesResponse getProperties() {
//
//	}

//	@GetMapping("/get-by-id")
//	public PropertyGetResponse getProperty(@RequestBody PropertyGetRequest request) {
//		
//	}
}
