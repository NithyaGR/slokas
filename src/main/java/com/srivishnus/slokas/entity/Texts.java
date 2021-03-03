package com.srivishnus.slokas.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table (name = "texts")
public class Texts {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO) 
	@Column (name = "text_id")
	private Integer textId;
	
	@Column (name = "chapter_id")
	private Integer chapterId;
	
	@Column (name = "book_id")
	private Integer bookId;
	
	@Column (name = "sloka_no")
	private Integer slokaNo;
	
	@Column (name = "text_english")
	private String textEnglish;
	
	@Column (name = "text_sanskrit")
	private String textSanskrit;
	
	@Column (name = "translation")
	private String translation;
	
	//The below book is mapped by Chapters.java's OneToMany annotation's object
	@ManyToOne
    @JoinColumn(name="chapter_id", nullable=false, updatable=false, insertable=false)
    private Chapters chapter;


	public Texts() {
		
	}
	
	public Texts(Integer chapterId, Integer bookId, Integer slokaNo, String textEnglish, String textSanskrit,
			String translation) {
		super();
		this.chapterId = chapterId;
		this.bookId = bookId;
		this.slokaNo = slokaNo;
		this.textEnglish = textEnglish;
		this.textSanskrit = textSanskrit;
		this.translation = translation;
		//this.chapter = chapter;
	}

	public Integer getTextId() {
		return textId;
	}


	public Integer getChapterId() {
		return chapterId;
	}

	public void setChapterId(Integer chapterId) {
		this.chapterId = chapterId;
	}

	public Integer getBookId() {
		return bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public Integer getSlokaNo() {
		return slokaNo;
	}

	public void setSlokaNo(Integer slokaNo) {
		this.slokaNo = slokaNo;
	}

	public String getTextEnglish() {
		return textEnglish;
	}

	public void setTextEnglish(String textEnglish) {
		this.textEnglish = textEnglish;
	}

	public String getTextSanskrit() {
		return textSanskrit;
	}

	public void setTextSanskrit(String textSanskrit) {
		this.textSanskrit = textSanskrit;
	}

	public String getTranslation() {
		return translation;
	}

	public void setTranslation(String translation) {
		this.translation = translation;
	}

//	public Chapters getChapter() {
//		return chapter;
//	}
//
//	public void setChapter(Chapters chapter) {
//		this.chapter = chapter;
//	}

	@Override
	public String toString() {
		return "Texts [textId=" + textId + ", chapterId=" + chapterId + ", bookId=" + bookId + ", slokaNo=" + slokaNo
				+ ", translation=" + translation + "]";
	}
	
	
	
	
}
