package com.inllar.rest.requests;

public class SendMessageRequest {
	public SendMessageRequest() {
	}

	private String message;
	private String userId;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
}
