package com.srivishnus.slokas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srivishnus.slokas.entity.User;
import com.srivishnus.slokas.exception.ResourceNotFoundException;
import com.srivishnus.slokas.repository.UserRepository;




// We use this annotation to create Rest APIs - we are using Spring MVC to develop this 
// controller layer
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	//get all users api
	@GetMapping 
	public List<User> getAllUsers(){
		System.out.println("Reaching out the GET Method in the controller of UserConroller Java");
		return this.userRepository.findAll();
	}
	
	//get a user api by id - email
	@GetMapping("/{email}")
	public User getUserById(@PathVariable (value = "email") String email) {
		return this.userRepository.findById(email)
		 .orElseThrow(() -> new ResourceNotFoundException("The User is not found with email "+email));
	}
	
	//create user api 
	@PostMapping 
	public User createUser(@RequestBody User user) {
		System.out.println(user);
		return this.userRepository.save(user);
	}
	
		
	//update user api by id - which is email here
	@PutMapping("/{email}")
	public User udateUser(@RequestBody User user, @PathVariable ("email") String email) {
		
		User existingUser = this.userRepository.findById(email)
			.orElseThrow(() -> new ResourceNotFoundException("The User is not found with email "+email));
		existingUser.setLastName(user.getLastName());
		existingUser.setFirstName(user.getFirstName());
		existingUser.setUserPassword(user.getUserPassword());
		return this.userRepository.save(existingUser);
		
	}
	//delete user api by email
	
	@DeleteMapping("/{email}")
	public ResponseEntity<User> deleteUser(@PathVariable ("email") String email){
		
		User existingUser = this.userRepository.findById(email)
				.orElseThrow(() -> new ResourceNotFoundException("The User is not found with email "+email));
		this.userRepository.delete(existingUser);
		return ResponseEntity.ok().build();
		
	}

}
