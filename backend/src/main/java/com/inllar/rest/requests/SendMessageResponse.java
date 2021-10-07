package com.inllar.rest.requests;

import com.inllar.rest.models.Message;

public class SendMessageResponse {
	public SendMessageResponse() {
	}

	private Message message;

	public Message getMessage() {
		return message;
	}

	public void setMessage(Message message) {
		this.message = message;
	}
}
