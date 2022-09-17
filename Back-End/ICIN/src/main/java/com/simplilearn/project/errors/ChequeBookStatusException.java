package com.simplilearn.project.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.simplilearn.project.entity.ChequeBook;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class ChequeBookStatusException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	/**
	 * @param message
	 */
	public ChequeBookStatusException(String message, String status) {
		super(message + " status found: " + status);
		// TODO Auto-generated constructor stub
	}
	
	

}
