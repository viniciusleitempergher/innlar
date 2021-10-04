package com.inllar.rest.requests;

import java.util.List;

import com.inllar.rest.models.Chat;

public class GetMessagesResponse {
	public GetMessagesResponse() {
	}
	
	private List<Chat> chats;
	
	public List<Chat> getChats() {
		return chats;
	}
}
