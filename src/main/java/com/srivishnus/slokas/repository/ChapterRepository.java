package com.srivishnus.slokas.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.srivishnus.slokas.entity.Chapters;

public interface ChapterRepository extends JpaRepository<Chapters, Integer>{

	
	Chapters findByChapterNameEnglish(String chapterNameEnglish);
	Chapters findByChapterNameSanskrit(String chapterNameSanskrit);
}
