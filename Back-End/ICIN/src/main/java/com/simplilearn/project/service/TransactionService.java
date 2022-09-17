package com.simplilearn.project.service;

import java.util.List;

import com.simplilearn.project.entity.Transaction;

public interface TransactionService {
	public List<Transaction> findAll();
	public Transaction save(Transaction theTran);
	public Transaction findById(long theTranID);
	public boolean deleteById(long theTranID);
}
