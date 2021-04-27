package com.srivishnus.slokas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srivishnus.slokas.entity.Books;
import com.srivishnus.slokas.repository.BooksRepository;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/book")

public class BooksController {
	
	@Autowired
	private BooksRepository booksRepository;
	
	@GetMapping(path = "/book")
	public List<Books> getAllBooks(){
		System.out.println("Reaching out the GET Method in the controller of - book - GetConroller Java");
		return this.booksRepository.findAll();
	}
	@GetMapping(path = "/*")
	public List<Books> getAllBooks1(){
		System.out.println("Reaching out the GET Method in the controller of - book - GetConroller Java");
		return this.booksRepository.findAll();
	}
	
	
//	@GetMapping ("/{title}")
//	public Books getBookByTitle(@PathVariable (value = "title") String title){
//		System.out.println("Reaching out the GET Method in the controller of GetConroller Java");
//		return this.booksRepository.findByBookTitle(title);
//		//.orElseThrow(() -> new ResourceNotFoundException("The book is not found with title "+title));
//				
//	}

}
