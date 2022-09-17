package com.simplilearn.project.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class BlockedAccountException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public BlockedAccountException(String description) {
		super(description);
	}
}
