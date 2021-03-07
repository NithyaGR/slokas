package com.srivishnus.slokas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.srivishnus.slokas.entity.Texts;
//import com.srivishnus.slokas.exception.ResourceNotFoundException;
import com.srivishnus.slokas.repository.TextsRepository;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/book/chapter/text")
@RequestMapping("/book")
//(value = {"/book/{bookTitle}", "/book/{bookId}"})
public class TextsController {
	
	@Autowired
	private TextsRepository textsRepository;
	
	//@GetMapping 
	@GetMapping(path = "/{bookId}/{chapterId}")
	public List<Texts> getAllTexts(@PathVariable Integer chapterId){
		System.out.println("Reaching out the GET Method in the controller of - text- GetConroller Java ");
		System.out.println("chapterId is : "+chapterId);
		//return this.textsRepository.findAll();
		return this.textsRepository.findByChapterId(chapterId);
	}
	
//	@GetMapping("/{bookId}/{chapterId}/{slokaNo}")
//	public Texts getTextsByChapterId(@PathVariable (value = "slokaNo") Integer slokaNo) {
//		System.out.println("TextsController's getMapping by slokaNo: "+slokaNo);
//		return this.textsRepository.findBySlokaNo(slokaNo);
//	}

}
//book => all chapters => selected chapter => all text
//book => home all books => /book/1 or /book/bhagavadgita => chapters
//book/1/15 or /book/bhagavadgita/15 => texts
