package com.simplilearn.project.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class UserAccessException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public UserAccessException (String description) {
		super(description);
	}
}
