package com.inllar.rest.controller;

import javax.annotation.Resource;
import javax.persistence.EntityExistsException;
import javax.security.sasl.AuthenticationException;

import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.inllar.rest.exceptions.ConflictException;
import com.inllar.rest.exceptions.UnauthorizedException;
import com.inllar.rest.requests.LoginRequest;
import com.inllar.rest.requests.RegisterRequest;
import com.inllar.rest.requests.TokenRequest;
import com.inllar.rest.requests.TokensResponse;
import com.inllar.rest.services.AuthService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping(value = "/auth")
public class AuthController {

	@Resource(name = "authService")
	private AuthService authService;

	@ApiOperation("Endpoint used to register new users")
	@PostMapping("/register")
	@ResponseStatus(code = HttpStatus.CREATED)
	public TokensResponse register(@RequestBody RegisterRequest request) {
		try {
			TokensResponse response = authService.register(request);
			return response;
		} catch (EntityExistsException e) {
			throw new ConflictException();
		}
	}

	@ApiOperation("Endpoint used to login")
	@PostMapping("/login")
	public TokensResponse login(@RequestBody LoginRequest request) {
		try {
			TokensResponse response = authService.login(request);
			return response;
		} catch (AuthenticationException | NullPointerException e) {
			throw new UnauthorizedException();
		}
	}

	@ApiOperation("Endpoint used to login with google")
	@PostMapping("/google-login")
	public TokensResponse googleLogin(@RequestBody TokenRequest request) throws Exception {
		String googleId = request.getToken();
		try {
			TokensResponse response = authService.googleLogin(googleId);
			return response;
		} catch (AuthenticationException e) {
			throw new UnauthorizedException();
		}
	}

	@ApiOperation("Endpoint used to refresh the access token by the refresh token")
	@PostMapping("/refresh")
	public TokensResponse refresh(@RequestBody TokenRequest request) {
		try {
			return authService.refreshAccessToken(request.getToken());
		} catch (AccessDeniedException e) {
			throw new UnauthorizedException();
		}
	}
}