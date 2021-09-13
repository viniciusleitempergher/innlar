package com.inllar.rest.services;

import java.util.List;
import java.util.UUID;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
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
		user.setPassword(user.getPassword());

		if (userData.getPhoneNumber() != null)
			user.setPhoneNumber(userData.getPhoneNumber());

		User userToReturn = userRepository.save(user);

		return userToReturn;
	}

	public boolean userExists(String email) {
		return userRepository.existsByEmail(email);
	}

	public void removeUser(UUID id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("User not found"));
		userRepository.delete(user);
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}

	public User getUser(UUID id) {
		return userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("User not found"));
	}
}
