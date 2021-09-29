package com.inllar.rest.controller;

import java.util.UUID;

import javax.annotation.Resource;
import javax.persistence.EntityNotFoundException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.inllar.rest.requests.GetUserResponse;
import com.inllar.rest.services.UserService;

import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@CrossOrigin
@RestController
@SecurityRequirement(name = "accesstoken")
@RequestMapping(value = "/users")
public class UserController {

	@Resource(name = "userService")
	private UserService userService;

	@ApiOperation("Get the user data by his id")
	@GetMapping
	public GetUserResponse getUser(@RequestParam String id) {
		try {
			return userService.getUserData(UUID.fromString(id));
		} catch (EntityNotFoundException e) {
			throw e;
		}
	}

	@GetMapping("/me")
	public GetUserResponse getMe() {
		try {
			return userService.getMe();
		} catch (Exception e) {
			throw e;
		}
	}
}
