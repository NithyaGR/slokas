package com.srivishnus.slokas.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name = "chapters")
public class Chapters {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO) 
	@Column (name = "chapter_id")
	private Integer chapterId;
	
	@Column (name = "chapter_no")
	private Integer chapterNo;
	
	@Column (name = "book_id")
	private Integer bookId;
	
	@Column (name = "chapter_name_english")
	private String chapterNameEnglish;
	
	@Column (name = "chapter_name_sanskrit")
	private String chapterNameSanskrit;
	
	//The below book is mapped by Book.java's OneToMany annotation's object
	@ManyToOne
    @JoinColumn(name="book_id", nullable=false, updatable=false, insertable=false)
    private Books book;
	
	////mapped by reference chapter is the object in the Texts.java entity's @ManyToOne annotation
	//IMPORTANT name should match
	@OneToMany(mappedBy= "chapter")
	private List<Texts> text = new ArrayList<Texts>();
	
	public Chapters() {
		
	}

	public Chapters(Integer bookId, String chapterNameEnglish, String chapterNameSanskrit, Integer chapterNo) {
		super();
		this.bookId = bookId;
		this.chapterNameEnglish = chapterNameEnglish;
		this.chapterNameSanskrit = chapterNameSanskrit;
		this.chapterNo = chapterNo;
	}

	
	public Integer getChapterId() {
		return chapterId;
	}

	public void setChapterId(Integer chapterId) {
		this.chapterId = chapterId;
	}

	public Integer getChapterNo() {
		return chapterNo;
	}

	public void setChapterNo(Integer chapterNo) {
		this.chapterNo = chapterNo;
	}

	public Integer getBookId() {
		return bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public String getChapterNameEnglish() {
		return chapterNameEnglish;
	}

	public void setChapterNameEnglish(String chapterNameEnglish) {
		this.chapterNameEnglish = chapterNameEnglish;
	}

	public String getChapterNameSanskrit() {
		return chapterNameSanskrit;
	}

	public void setChapterNameSanskrit(String chapterNameSanskrit) {
		this.chapterNameSanskrit = chapterNameSanskrit;
	}

	public Books getBook() {
		return book;
	}

	public void setBook(Books book) {
		this.book = book;
	}

//	public List<Texts> getText() {
//		return text;
//	}
//
//	public void setText(List<Texts> text) {
//		this.text = text;
//	}

	@Override
	public String toString() {
		return "Chapters [chapterId=" + chapterId + ", chapterNo=" + chapterNo + ", bookId=" + bookId
				+ ", chapterNameEnglish=" + chapterNameEnglish + ", chapterNameSanskrit=" + chapterNameSanskrit
				+ ", book=" + book + ", text=" + text + "]";
	}

	
	
	

}
