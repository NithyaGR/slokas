package com.srivishnus.slokas.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;


public class DatabaseLoader  implements CommandLineRunner{
	
	private UserRepository userRepository;

	@Autowired
	public DatabaseLoader(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	//Need to implement the run() method from CommanLineRunner interface to 
	// execute the command line arguments - basically your sysout commands
		
	@Override
	public void run(String... args) throws Exception {
		System.out.println(userRepository.toString());
		System.out.println("Hello User - From Springboot");
	}
	
	
	
	
	

}
