package com.inllar.rest.controller;

import java.util.ArrayList;
import java.util.UUID;

import javax.annotation.Resource;
import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.inllar.rest.requests.GetChatsResponse;
import com.inllar.rest.requests.GetUserResponse;
import com.inllar.rest.requests.SendMessageRequest;
import com.inllar.rest.requests.SendMessageResponse;
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

	@GetMapping("/my-chats")
	public GetChatsResponse getChats() {
		try {
			return userService.getChats();
		} catch (Exception e) {
			throw e;
		}
	}

	@PostMapping("/send-message")
	public SendMessageResponse sendMessage(@RequestBody SendMessageRequest request) {
		try {
			return userService.sendMessage(request);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation("Update user avatar")
	@PostMapping("/avatar")
	public void uploadImages(HttpServletRequest request) throws Exception {
		try {
			ArrayList<Part> partsList = new ArrayList<Part>(request.getParts());

			userService.updateAvatar(partsList.get(0));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
