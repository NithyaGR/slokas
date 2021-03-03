package com.srivishnus.slokas.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity // to make this class as a JPA entity
@Table (name = "books")// to map this class with our books table
public class Books {
	
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO) 
	@Column (name = "book_id")
	private Integer bookId;
	
	@Column (name = "book_title")
	private String bookTitle;
	
	@Column (name = "book_author")
	private String bookAuthor;

	//mapped by reference book is the object in the Chapters.java entity's @ManyToOne annotation
	//IMPORTANT name should match - otherwise you will get unknown entity annotation exception
	@OneToMany(mappedBy="book")
	private List<Chapters> chapter = new ArrayList<Chapters>();
	
	
	//default constructor 
	public Books() {
		
	}
	
	public Books(Integer bookId, String bookTitle, String bookAuthor) {
		super();
		this.bookId = bookId;
		this.bookTitle = bookTitle;
		this.bookAuthor = bookAuthor;
		//this.chapter = chapter;
	}

	public String getBookTitle() {
		return bookTitle;
	}

	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}

	public String getBookAuthor() {
		return bookAuthor;
	}

	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}

//	public List<Chapters> getChapter() {
//		return chapter;
//	}
//
//	public void setChapter(List<Chapters> chapter) {
//		this.chapter = chapter;
//	}

	@Override
	public String toString() {
		return "Books [bookId=" + bookId + ", bookTitle=" + bookTitle + "]";
	}

}
