package com.simplilearn.project.service;

import java.util.List;

import com.simplilearn.project.entity.Account;

public interface AccountService {
	public List<Account> findAll();
	public Account save(Account theAcc);
	public Account findById(long theAccID);
	public boolean deleteById(long theAccID);
	public void updateAccountStatus(long theAccID, boolean status);
	public List<Account> findUserAccounts(String username);
 }
