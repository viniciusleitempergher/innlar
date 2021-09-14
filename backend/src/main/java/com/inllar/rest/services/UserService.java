package com.inllar.rest.services;

import java.security.SecureRandomParameters;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.passay.CharacterRule;
import org.passay.EnglishCharacterData;
import org.passay.PasswordGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.inllar.rest.models.User;
import com.inllar.rest.repositories.UserRepository;

@Service("userService")
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User createUser(User userData) {

		boolean emailExists = userRepository.existsByEmail(userData.getEmail());

		if (emailExists) {
			throw new EntityExistsException("Email already exists!");
		}

		User user = new User();

		user.setEmail(userData.getEmail());
		user.setName(userData.getName());

		if (userData.getPassword() == null) {
			BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();

			PasswordGenerator passGen = new PasswordGenerator();
			List<CharacterRule> rules = Arrays.asList(new CharacterRule(EnglishCharacterData.UpperCase, 1),
					new CharacterRule(EnglishCharacterData.LowerCase, 1),
					new CharacterRule(EnglishCharacterData.Digit, 1),
					new CharacterRule(EnglishCharacterData.Special, 1));
			String password = passGen.generatePassword(8, rules);

			user.setPassword(crypt.encode(password));
		} else {
			BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
			user.setPassword(crypt.encode(userData.getPassword()));
		}

		if (userData.getPhoneNumber() != null)
			user.setPhoneNumber(userData.getPhoneNumber());

		User userToReturn = userRepository.save(user);

		return userToReturn;
	}

	public boolean userExists(String email) {
		return userRepository.existsByEmail(email);
	}

	public void removeUser(UUID id) {
		User user = userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("User not found"));
		userRepository.delete(user);
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}

	public User getUser(UUID id) {
		return userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("User not found"));
	}
}
