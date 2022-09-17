package com.simplilearn.project.service;

import java.util.List;

import com.simplilearn.project.entity.ChequeBook;

public interface ChequeBookService {
	public List<ChequeBook> findAll();
	public ChequeBook save(ChequeBook theBook);
	public ChequeBook findById(long theBook);
	public boolean deleteById(long theBook);
}
