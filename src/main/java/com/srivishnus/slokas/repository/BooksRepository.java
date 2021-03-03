package com.srivishnus.slokas.repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srivishnus.slokas.entity.Books;

public interface BooksRepository extends JpaRepository<Books, Integer>{

	Books findByBookTitle(String bookTitle);
}
