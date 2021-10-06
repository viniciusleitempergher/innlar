package com.inllar.rest.requests;

import java.util.List;

import com.inllar.rest.models.Message;

public class GetMessagesResponse {
	public GetMessagesResponse() {
	}
	
	private List<Message> messages;

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}
}
