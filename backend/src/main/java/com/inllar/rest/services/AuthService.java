package com.inllar.rest.services;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;

import javax.annotation.Resource;
import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;
import javax.security.sasl.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.inllar.rest.models.RefreshToken;
import com.inllar.rest.models.User;
import com.inllar.rest.repositories.RefreshTokenRepository;
import com.inllar.rest.repositories.UserRepository;
import com.inllar.rest.requests.LoginRequest;
import com.inllar.rest.requests.RegisterRequest;
import com.inllar.rest.requests.TokenRequest;
import com.inllar.rest.requests.TokensResponse;
import com.inllar.rest.utils.JwtTokenUtil;

@Service("authService")
@Component
public class AuthService {

	@Autowired
	private RefreshTokenRepository refreshTokenRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JwtTokenUtil jwt;

	@Resource(name = "userService")
	private UserService userService;

	@Value("${google.client.id}")
	String CLIENT_ID;

	public TokensResponse register(RegisterRequest request) {
		if (userRepository.existsByEmail(request.getEmail())) {
			throw new EntityExistsException();
		}

		User user = new User();
		user.setEmail(request.getEmail());
		user.setPassword(request.getPassword());
		user.setName(request.getName());

		if (request.getPhoneNumber() != null)
			user.setPhoneNumber(request.getPhoneNumber());

		userService.createUser(user);

		TokensResponse response = handleExistingUser(user);
		return response;
	}

	public TokensResponse login(LoginRequest request) throws AuthenticationException {

		String email = request.getEmail();
		String password = request.getPassword();

		User user = userRepository.findByEmail(email);
		BCryptPasswordEncoder cript = new BCryptPasswordEncoder();

		if (!cript.matches(password, user.getPassword())) {
			throw new AuthenticationException();
		}

		TokensResponse response = handleExistingUser(user);
		return response;
	}

	public TokensResponse googleLogin(String googleId) throws GeneralSecurityException, IOException {

		HttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
		JsonFactory jsonFactory = GsonFactory.getDefaultInstance();

		GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(httpTransport, jsonFactory)
				.setAudience(Collections.singletonList(CLIENT_ID)).build();

		GoogleIdToken idToken = verifier.verify(googleId);

		TokensResponse response;

		if (idToken != null) {
			Payload payload = idToken.getPayload();

			// Print user identifier
			String userId = payload.getSubject();
			System.out.println("User ID: " + userId);

			// Get profile information from payload
			String email = payload.getEmail();
			String name = (String) payload.get("name");
			String pictureUrl = (String) payload.get("picture");
			// String locale = (String) payload.get("locale");
			// String familyName = (String) payload.get("family_name");
			// String givenName = (String) payload.get("given_name");

			User user = new User();
			user.setEmail(email);
			user.setName(name);
			user.setAvatar(pictureUrl);

			if (!userService.userExists(email)) {
				response = handleCreateUser(user);
			} else {
				response = handleExistingUser(user);
			}
		} else {
			throw new AuthenticationException();
		}
		return response;
	}

	private TokensResponse handleExistingUser(User userData) {

		User user = userRepository.findByEmail(userData.getEmail());

		try {
			RefreshToken dataRefreshToken = refreshTokenRepository.findByUser(user);
			String refreshToken = dataRefreshToken.getToken();

			if (jwt.validateRefreshToken(refreshToken, user)) {
				String accessToken = createAccessToken(dataRefreshToken);

				TokensResponse response = new TokensResponse();

				response.setAccessToken(accessToken);
				response.setRefreshToken(refreshToken);

				return response;
			} else {
				throw new EntityNotFoundException();
			}
		} catch (EntityNotFoundException | NullPointerException e) {
		}

		String tokens[] = createRefreshToken(user);
		TokensResponse response = new TokensResponse();

		response.setAccessToken(tokens[0]);
		response.setRefreshToken(tokens[1]);

		return response;
	}

	private TokensResponse handleCreateUser(User userData) {
		User user = userService.createUser(userData);

		String[] tokens = createRefreshToken(user);

		TokensResponse response = new TokensResponse();
		response.setAccessToken(tokens[0]);
		response.setRefreshToken(tokens[1]);

		return response;
	}

	private String[] createRefreshToken(User user) {
		String refreshToken = jwt.generateRefreshToken(user);

		RefreshToken refreshTokenEntity = new RefreshToken();

		refreshTokenEntity.setUser(user);
		refreshTokenEntity.setExpiresIn(jwt.JWT_REFRESH_TOKEN_VALIDITY);
		refreshTokenEntity.setToken(refreshToken);

		if (refreshTokenRepository.existsByUser(user)) {
			RefreshToken refreshToDelete = refreshTokenRepository.findByUser(user);
			refreshTokenRepository.delete(refreshToDelete);
		}
		refreshTokenRepository.save(refreshTokenEntity);

		String accessToken = createAccessToken(refreshTokenEntity);

		return new String[] { accessToken, refreshToken };
	}

	private String createAccessToken(RefreshToken refreshToken) {
		String accessToken = jwt.generateAccessToken(refreshToken);
		return accessToken;
	}

	public String refreshAccessToken(String refreshToken) {
		User user = jwt.getUserFromRefreshToken(refreshToken);

		if (jwt.validateRefreshToken(refreshToken, user)) {
			RefreshToken refreshTokenData = refreshTokenRepository.findByUser(user);

			return jwt.generateAccessToken(refreshTokenData);
		} else {
			throw new AccessDeniedException("Invalid Token");
		}
	}
}
