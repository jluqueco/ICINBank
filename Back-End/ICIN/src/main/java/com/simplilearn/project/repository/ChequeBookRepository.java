package com.simplilearn.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.project.entity.ChequeBook;
@Repository
public interface ChequeBookRepository extends JpaRepository<ChequeBook , Long> {

}
