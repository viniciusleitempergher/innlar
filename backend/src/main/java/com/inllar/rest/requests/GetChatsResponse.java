package com.inllar.rest.requests;

import java.util.List;

import com.inllar.rest.models.Chat;

public class GetChatsResponse {
	public GetChatsResponse() {
	}

	private List<Chat> chats;

	public List<Chat> getChats() {
		return chats;
	}

	public void setChats(List<Chat> chats) {
		this.chats = chats;
	}
}
