package com.inllar.rest.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.annotation.Resource;
import javax.persistence.EntityNotFoundException;
import javax.security.sasl.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.inllar.rest.exceptions.NotFoundException;
import com.inllar.rest.exceptions.UnauthorizedException;
import com.inllar.rest.requests.PropertiesFilterResponse;
import com.inllar.rest.requests.PropertiesGetResponse;
import com.inllar.rest.requests.PropertyGetResponse;
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

	@ApiOperation("Create new properties")
	@PostMapping("/create")
	@ResponseStatus(code = HttpStatus.CREATED)
	public PropertyRegisterResponse createProperty(@RequestBody PropertyRegisterRequest request) {
		try {
			return propertyService.createProperty(request);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation("Delete the property by its id")
	@DeleteMapping("/delete")
	public void deleteProperty(@RequestParam String propertyId) {
		try {
			propertyService.deleteProperty(propertyId);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation("Upload property images")
	@PostMapping("/images")
	public void uploadImages(HttpServletRequest request) throws Exception {
		try {
			ArrayList<Part> partsList = new ArrayList<Part>(request.getParts());

			propertyService.saveImages(partsList);
		} catch (AuthenticationException e) {
			throw new UnauthorizedException();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@ApiOperation("Search properties by the address")
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

	@ApiOperation("Get the current CEPs, cities, states and districts registered in the database")
	@GetMapping("/search-filters")
	public PropertiesFilterResponse getPropertiesSearchFilters() {
		try {
			return propertyService.getSearchFilters();
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation("Get the property by the id from param")
	@GetMapping
	public PropertyGetResponse getProperty(@RequestParam String uuid) {
		try {
			return propertyService.getPropertyById(uuid);
		} catch (EntityNotFoundException e) {
			throw new NotFoundException();
		}
	}

	@ApiOperation("Get all the properties of an user")
	@GetMapping("/get-from-user")
	public PropertiesGetResponse getPropertiesFromUser(@RequestParam String userUuid) {
		try {
			return propertyService.getPropertiesFromUser(userUuid);
		} catch (EntityNotFoundException e) {
			throw new NotFoundException();
		}
	}

	@ApiOperation("Edit a property")
	@PostMapping("/edit")
	public void editProperty(@RequestBody PropertyRegisterRequest request, @RequestParam String propertyId) {
		try {
			propertyService.editProperty(request, propertyId);
		} catch (EntityNotFoundException e) {
			throw new NotFoundException();
		}
	}

	@ApiOperation("Delete the images by the id from param")
	@DeleteMapping("/images")
	public void deleteImages(@RequestParam("images") String[] imagesId) throws IOException {
		try {
			propertyService.removeImages(imagesId);
		} catch (EntityNotFoundException e) {
			throw new NotFoundException();
		}
	}
}
