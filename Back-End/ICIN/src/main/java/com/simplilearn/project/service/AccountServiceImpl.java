package com.simplilearn.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.project.entity.Account;
import com.simplilearn.project.repository.AccountRepository;

@Service
public class AccountServiceImpl implements AccountService {

	@Autowired
	private AccountRepository accountRepository;
	
	public AccountServiceImpl() {
		// TODO Auto-generated constructor stub
	}
		
	/**
	 * @param accountRepository
	 */
	public AccountServiceImpl(AccountRepository accountRepository) {
		super();
		this.accountRepository = accountRepository;
	}

	@Override
	public List<Account> findAll() {
		 
		return accountRepository.findAll();
	}

	@Override
	public Account save(Account theAcc) {
		 
		return accountRepository.save(theAcc);
	}

	@Override
	public Account findById(long theAccID) {
		 
		return accountRepository.findById(theAccID).get();
	}
	
	@Override
	public boolean deleteById(long theAccID) {
		 
		
		if(accountRepository.findById(theAccID).isPresent()) {
			accountRepository.deleteById(theAccID);
			return true;
		}
		
		return false;
	}

	@Override
	public void updateAccountStatus(long theAccID, boolean status) {
		 
		
		if(accountRepository.findById(theAccID).isPresent()) {
			Account acc = accountRepository.findById(theAccID).get();
			acc.setBlockStatus(status);
			save(acc);
		}
	}

	@Override
	public List<Account> findUserAccounts(String username) {
		
		return accountRepository.getUserAccounts(username);
	}

}
