package com.inllar.rest.services;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;

import javax.annotation.Resource;
import javax.persistence.EntityExistsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.inllar.rest.configs.JwtTokenUtil;
import com.inllar.rest.models.RefreshToken;
import com.inllar.rest.models.User;
import com.inllar.rest.repositories.RefreshTokenRepository;
import com.inllar.rest.repositories.UserRepository;

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

	public String[][] login(String googleId) throws GeneralSecurityException, IOException {

		HttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
		JsonFactory jsonFactory = GsonFactory.getDefaultInstance();

		GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(httpTransport, jsonFactory)
				.setAudience(Collections.singletonList(CLIENT_ID)).build();

		GoogleIdToken idToken = verifier.verify(googleId);

		String[][] tokens;

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
				tokens = handleCreateUser(user);
			} else {
				tokens = handleExistingUser(user);
			}
		} else {
			System.out.println("Invalid ID token.");
			throw new EntityExistsException();
		}
		return tokens;
	}

	private String[][] handleExistingUser(User userData) {

		User user = userRepository.findByEmail(userData.getEmail());
		System.out.println("User: " + user.getEmail());
		RefreshToken dataRefreshToken = refreshTokenRepository.findByUser(user);

		String refreshToken = dataRefreshToken.getToken();

		if (jwt.validateRefreshToken(refreshToken, user)) {
			String accessToken = createAccessToken(dataRefreshToken);
			return new String[][] { { "token", accessToken + "" }, { "refreshToken", refreshToken + "" } };
		} else {
			String tokens[] = createRefreshToken(user);
			return new String[][] { { "token", tokens[0] }, { "refreshToken", tokens[1] } };
		}
	}

	private String[][] handleCreateUser(User userData) {
		User user = userService.createUser(userData);

		String[] tokens = createRefreshToken(user);
		String[][] tokensJson = { { "token", tokens[0] + "" }, { "refreshToken", tokens[1] + "" } };

		return tokensJson;
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
