package com.simplilearn.project.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.project.entity.Account;
import com.simplilearn.project.entity.ChequeBook;
import com.simplilearn.project.repository.ChequeBookRepository;

@Service
public class ChequeBookServiceImpl implements ChequeBookService {
	@Autowired
	private ChequeBookRepository chequeBookRepository;
	
	public ChequeBookServiceImpl() {}
	
	/**
	 * @param chequeBookRepository
	 */
	public ChequeBookServiceImpl(ChequeBookRepository chequeBookRepository) {
		super();
		this.chequeBookRepository = chequeBookRepository;
	}

	@Override
	public List<ChequeBook> findAll() {
		// TODO Auto-generated method stub
		return chequeBookRepository.findAll();
	}

	@Override
	public ChequeBook save(ChequeBook theBook) {
		// TODO Auto-generated method stub
		return chequeBookRepository.save(theBook);
	}

	@Override
	public ChequeBook findById(long theBook) {
		if(chequeBookRepository.findById(theBook).isPresent()) {
			return chequeBookRepository.findById(theBook).get();
		}
		return null;
	}

	@Override
	public boolean deleteById(long theBook) {
		if(chequeBookRepository.findById(theBook).isPresent()) {
			chequeBookRepository.deleteById(theBook);
			return true;
		}
		return false;
	}

	@Override
	public List<ChequeBook> getChequesByAccount(List<Account> accs) {
		// TODO Auto-generated method stub
		//return chequeBookRepository.getChequesByAccounts(accs.stream().map(x -> x.getAccountID()).collect(Collectors.toList()));
		return chequeBookRepository.getChequesByAccounts(accs);
	}

}
