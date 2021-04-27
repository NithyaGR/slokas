package com.srivishnus.slokas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srivishnus.slokas.entity.Books;
import com.srivishnus.slokas.repository.BooksRepository;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = {"/login","/register","/about" })
public class RefreshController {
	
	@Autowired
	private BooksRepository booksRepository;

	@GetMapping
	public List<Books> getAllBooks(){
		System.out.println("Reaching out the GET Method in the refresh controller - path is about");
		return this.booksRepository.findAll();
	}
	


}
