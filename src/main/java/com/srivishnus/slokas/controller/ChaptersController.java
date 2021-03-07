package com.srivishnus.slokas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.srivishnus.slokas.entity.Chapters;
//import com.srivishnus.slokas.exception.ResourceNotFoundException;
import com.srivishnus.slokas.repository.ChapterRepository;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping(value = {"/book/{bookTitle}", "/book/{bookId}"})
//@RequestMapping("/book/chapter")
@RequestMapping("/book")
public class ChaptersController {

	    @Autowired
		private ChapterRepository chapterRepository;
		
		//@GetMapping
		@GetMapping(path = "/{bookId}")
		public List<Chapters> getAllChapters(@PathVariable Integer bookId){
			System.out.println("GET Method in the controller of- chapters- GetConroller Java");
			System.out.println("Book Id is: "+bookId);
			return this.chapterRepository.findAll();
		}
		
//		@GetMapping("/{chapterId}")
//		public Chapters getUserById(@PathVariable (value = "chapterId") Integer chapterId) {
//			return this.chapterRepository.findById(chapterId).
//			 orElseThrow(() -> new ResourceNotFoundException("The text is not found with id "+chapterId));
//		}
}
