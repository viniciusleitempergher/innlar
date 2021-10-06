package com.inllar.rest.services;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.passay.CharacterRule;
import org.passay.EnglishCharacterData;
import org.passay.PasswordGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.inllar.rest.models.Chat;
import com.inllar.rest.models.Message;
import com.inllar.rest.models.User;
import com.inllar.rest.repositories.ChatRepository;
import com.inllar.rest.repositories.MessageRepository;
import com.inllar.rest.repositories.UserRepository;
import com.inllar.rest.requests.GetChatsResponse;
import com.inllar.rest.requests.GetMessagesRequest;
import com.inllar.rest.requests.GetMessagesResponse;
import com.inllar.rest.requests.GetUserResponse;
import com.inllar.rest.requests.SendMessageRequest;
import com.inllar.rest.utils.JwtTokenUtil;

@Service("userService")
public class UserService {
	@Autowired
	private JwtTokenUtil jwt;

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ChatRepository chatRepository;
	@Autowired
	private MessageRepository messageRepository;

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

	public GetUserResponse getUserData(UUID id) {
		User user = userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("User not found"))
				.getUserData();

		GetUserResponse response = new GetUserResponse();
		response.setAvatar(user.getAvatar());
		response.setEmail(user.getEmail());
		response.setName(user.getName());
		response.setPhoneNumber(user.getPhoneNumber());

		return response;
	}

	public GetUserResponse getMe() {
		String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();

		User user = jwt.getUserFromAccessToken(token);

		GetUserResponse response = new GetUserResponse();
		response.setId(user.getId());
		response.setAvatar(user.getAvatar());
		response.setEmail(user.getEmail());
		response.setName(user.getName());
		response.setPhoneNumber(user.getPhoneNumber());

		return response;
	}

	public GetChatsResponse getChats() {
		String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();

		User user = jwt.getUserFromAccessToken(token);

		GetChatsResponse response = new GetChatsResponse();

		List<Chat> chats = user.getChats();

		chats.forEach((chat) -> {

			List<User> changedUsers = new ArrayList<User>();
			chat.getUsers().forEach((userOfChat) -> {
				userOfChat = userOfChat.getUserData();
				userOfChat.setChats(null);
				userOfChat.setProperties(null);
				changedUsers.add(userOfChat);
			});
			chat.setUsers(changedUsers);

			chat.getMessages().forEach((message) -> {
				message.setSender(message.getSender().getUserData());
				message.setChat(null);
			});
		});

		response.setChats(chats);

		return response;
	}

	public void sendMessage(SendMessageRequest request) {

		String message = request.getMessage();
		String receiverId = request.getUserId();

		String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();

		User sender = jwt.getUserFromAccessToken(token);

		User receiver = getUser(UUID.fromString(receiverId));

		List<User> usersOfChat = new ArrayList<User>();
		usersOfChat.add(receiver);
		usersOfChat.add(sender);

		Chat chat;

		if (!chatRepository.existsByUsersIn(usersOfChat)) {
			chat = new Chat();
			chat.setUsers(usersOfChat);
			chatRepository.save(chat);
		} else {
			chat = chatRepository.findByUsersIn(usersOfChat).get(0);
		}

		List<Message> messages = chat.getMessages();

		Message messageModel = new Message();
		messageModel.setChat(chat);
		messageModel.setText(message);
		messageModel.setSender(sender);
		messageModel.setTimestamp(Timestamp.from(Instant.now()));

		messageRepository.save(messageModel);
		messages.add(messageModel);

		chat.setMessages(messages);

		chatRepository.save(chat);
	}

	public GetMessagesResponse getMessages(GetMessagesRequest request) {
		String token = (String) SecurityContextHolder.getContext().getAuthentication().getCredentials();

		User sender = jwt.getUserFromAccessToken(token);

		User receiver = getUser(UUID.fromString(request.getUserId()));

		List<User> usersOfChat = new ArrayList<User>();
		usersOfChat.add(receiver);
		usersOfChat.add(sender);

		GetMessagesResponse response = new GetMessagesResponse();

		if (chatRepository.existsByUsersIn(usersOfChat)) {
			Chat chat = chatRepository.findByUsersIn(usersOfChat).get(0);
			
			List<User> changedUsers = new ArrayList<User>();
			chat.getUsers().forEach((userOfChat) -> {
				userOfChat = userOfChat.getUserData();
				userOfChat.setChats(null);
				userOfChat.setProperties(null);
				changedUsers.add(userOfChat);
			});
			chat.setUsers(changedUsers);

			chat.getMessages().forEach((message) -> {
				message.setSender(message.getSender().getUserData());
				message.setChat(null);
			});

			response.setMessages(chat.getMessages());
		}

		return response;
	}
}
