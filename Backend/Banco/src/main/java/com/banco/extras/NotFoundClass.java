package com.banco.extras;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NotFoundClass extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public NotFoundClass(String message) {
		super(message);
	}
}
