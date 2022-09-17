package com.simplilearn.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.project.entity.Transaction;
import com.simplilearn.project.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {
	@Autowired
	private TransactionRepository transactionRepository;
	
	public TransactionServiceImpl() {}
	
	/**
	 * @param transactionRepository
	 */
	public TransactionServiceImpl(TransactionRepository transactionRepository) {
		super();
		this.transactionRepository = transactionRepository;
	}

	@Override
	public List<Transaction> findAll() {
		// TODO Auto-generated method stub
		return transactionRepository.findAll();
	}

	@Override
	public Transaction save(Transaction theTran) {
		return transactionRepository.save(theTran);
	}

	@Override
	public Transaction findById(long theTranID) {
		if(transactionRepository.findById(theTranID).isPresent()) {
			return transactionRepository.findById(theTranID).get();
		}
		return null;
	}

	@Override
	public boolean deleteById(long theTranID) {
		if(transactionRepository.findById(theTranID).isPresent()) {
			transactionRepository.deleteById(theTranID);
			return true;
		}
		return false;
	}

}
