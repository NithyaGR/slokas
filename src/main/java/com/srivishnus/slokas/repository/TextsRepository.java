package com.srivishnus.slokas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

//import com.srivishnus.slokas.entity.Chapters;
import com.srivishnus.slokas.entity.Texts;

public interface TextsRepository extends JpaRepository<Texts, Integer>{

	List<Texts> findByChapterId(Integer chapterId);
	
	Texts findBySlokaNo(Integer slokaNo);
}
