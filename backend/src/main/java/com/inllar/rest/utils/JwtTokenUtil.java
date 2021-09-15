package com.inllar.rest.utils;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.function.Function;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.inllar.rest.models.RefreshToken;
import com.inllar.rest.models.User;
import com.inllar.rest.repositories.RefreshTokenRepository;
import com.inllar.rest.repositories.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenUtil implements Serializable {

	@Autowired
	private RefreshTokenRepository refreshTokenRepository;

	private static final long serialVersionUID = 5282239508767377003L;

	public Long JWT_REFRESH_TOKEN_VALIDITY;
	public Long JWT_TOKEN_VALIDITY;

	@Value("${jwt.token.seconds}")
	private void setTokenValidity(String seconds) {
		this.JWT_TOKEN_VALIDITY = Long.parseLong(seconds);
	}

	@Value("${jwt.refreshtoken.hours}")
	private void setRefreshTokenValidity(String hours) {
		this.JWT_REFRESH_TOKEN_VALIDITY = Long.parseLong(hours) * 60 * 60;
	}

	@Value("${jwt.refreshtoken.secret}")
	private String REFRESH_TOKEN_SECRET;

	@Autowired
	private UserRepository userRepository;

	/**
	 * Returns the id of the user token
	 * 
	 * @param token - the user access/refresh token
	 */
	public String getIdFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}

	/**
	 * Returns the expiration date from the user token
	 * 
	 * @param token - the user login token
	 */
	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}

	private <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}

	/**
	 * Returns a JSON with the key values inside of the user token
	 * 
	 * @param token - the user login token
	 */
	private Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(REFRESH_TOKEN_SECRET).parseClaimsJws(token).getBody();
	}

	/**
	 * Check if the token has expired
	 * 
	 * @param token - the user login token
	 */
	private Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}

	/**
	 * Generates the refresh token for the user
	 * 
	 * @param user - the user object
	 */
	public String generateRefreshToken(User user) {
		return doGenerateToken(user.getId().toString(), JWT_REFRESH_TOKEN_VALIDITY);
	}

	/**
	 * Generates the access token for the user
	 * 
	 * @param user - the user object
	 */
	public String generateAccessToken(RefreshToken refreshToken) {
		return doGenerateToken(refreshToken.getId().toString(), JWT_TOKEN_VALIDITY);
	}

	/**
	 * Creates the token and defines its time of expiration
	 * 
	 * @param subject  - the id of the user/refreshToken
	 * @param validity - the time in seconds to expire
	 */
	private String doGenerateToken(String subject, Long validity) {
		Map<String, Object> claims = new HashMap<String, Object>();

		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + validity * 1000))
				.signWith(SignatureAlgorithm.HS512, REFRESH_TOKEN_SECRET).compact();
	}

	/**
	 * Checks if the refresh token is valid
	 * 
	 * @param token    - the refresh token
	 * @param user - the user's object
	 */
	public Boolean validateRefreshToken(String token, User user) {
		final String id = getIdFromToken(token);

		return (id.equals(user.getId().toString()) && !isTokenExpired(token));
	}

	/**
	 * Checks if the token is valid for this user
	 * 
	 * @param token        - the access token
	 * @param refreshToken - the refresh token's object
	 */
	public Boolean validateAccessToken(String token, RefreshToken refreshToken) {
		final String id = getIdFromToken(token);
		return (id.equals(refreshToken.getId().toString()) && !isTokenExpired(token));
	}

	/**
	 * @throws EntityNotFoundException - if refresh token from param token doesn't
	 *                                 exists in DB
	 * 
	 * @param token - the access token
	 * @return true if valid, false if not
	 */
	public Boolean validateAccessToken(String token) {
		final String id = getIdFromToken(token);
		RefreshToken refreshToken = refreshTokenRepository.findById(UUID.fromString(id))
				.orElseThrow(() -> new EntityNotFoundException());
		return validateAccessToken(token, refreshToken);
	}

	/**
	 * @throws EntityNotFoundException - case refresh token from access token
	 *                                 doesn't exists
	 * @param token - the access token
	 * @return the user from token
	 */
	public User getUserFromAccessToken(String token) {
		String refreshTokenId = getIdFromToken(token);

		RefreshToken refreshToken = refreshTokenRepository.findById(UUID.fromString(refreshTokenId))
				.orElseThrow(() -> new EntityNotFoundException());

		return refreshToken.getUser();
	}

	/**
	 * @throws EntityNotFoundException - case user from refresh token doesn't
	 *                                 exists
	 * @param token - the refresh token
	 * @return user - the user's object from db
	 */
	public User getUserFromRefreshToken(String token) {
		String userId = getIdFromToken(token);

		User user = userRepository.findById(UUID.fromString(userId))
				.orElseThrow(() -> new EntityNotFoundException());

		return user;
	}
}
