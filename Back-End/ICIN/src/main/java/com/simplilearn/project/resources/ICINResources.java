package com.simplilearn.project.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.project.entity.Account;
import com.simplilearn.project.entity.ChequeBook;
import com.simplilearn.project.entity.Transaction;
import com.simplilearn.project.entity.User;
import com.simplilearn.project.service.AccountService;
import com.simplilearn.project.service.ChequeBookService;
import com.simplilearn.project.service.TransactionService;
import com.simplilearn.project.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ICINResources {
	@Autowired
	private UserService userService;
	
	@Autowired
	private TransactionService transactionService;
	
	@Autowired
	private ChequeBookService chequeBookService;
	
	@Autowired
	private AccountService accountService;
	
	//***USERS***
	//User List
	@GetMapping(path = "/user/list")
	public List<User> getAllUsers(){
		return userService.findAll();
	}
	
	//New User
	@PostMapping(path = "/user/new")
	public ResponseEntity<User> createUser(@RequestBody User newUser){
		if(newUser != null) {
			User userCreated = userService.save(newUser);
			return new ResponseEntity<User>(userCreated, HttpStatus.CREATED);
		}else {
			return new ResponseEntity<User>(new User(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//Find User by ID
	@GetMapping(path="/user/{username}")
	public ResponseEntity<User> getUserById(@PathVariable String username){
		if(username != null) {
			User user = userService.findById(username);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		} 
	}
	
	//Activate/deactivate user
	@PutMapping(path = "/user/{username}/{userStatus}")
	public ResponseEntity<User> activateUser(@PathVariable String username, @PathVariable boolean userStatus){
		User user = userService.findById(username);
		if( user != null) {
			user.setUserStatus(userStatus);
			userService.save(user);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}else {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	}
	
	//***ACCOUNTS***
	
	//Account List
	@GetMapping(path = "/account/list")
	public List<Account> getAllAccounts(){
		return accountService.findAll();
	}
	
	//List of accounts by username
	@GetMapping(path = "/account/{username}")
	public List<Account> getUserAccount(@PathVariable String username){
		return accountService.findUserAccounts(username);
	}
	
	//block/unblock account
	@PutMapping(path = "/account/{accID}/{accountStatus}")
	public ResponseEntity<Account> blockAccount(@PathVariable long accID, @PathVariable boolean accountStatus){
		Account account = accountService.findById(accID);
		
		if(account != null) {
			account.setBlockStatus(accountStatus);
			accountService.save(account);
			return new ResponseEntity<Account>(account, HttpStatus.CREATED);
		}else {
			return new ResponseEntity<Account>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//***CHEQUES***
	
	//Creates a new book Request
	@PostMapping(path = "/chequebook/new")
	public ResponseEntity<ChequeBook> createChequeBook(@RequestBody ChequeBook newCheque){
		if(newCheque != null) {
			ChequeBook cheque = chequeBookService.save(newCheque);
			return new ResponseEntity<ChequeBook>(cheque, HttpStatus.CREATED);
		}else {
			return new ResponseEntity<ChequeBook>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// list books
	@GetMapping(path = "/chequebook/list")
	public List<ChequeBook> getAllChequeBooks(){
		return chequeBookService.findAll();
	}
	
	//set status of the book
	@PutMapping(path = "/chequebook/{id}/{status}")
	public ResponseEntity<ChequeBook> setStatus(@PathVariable long id, @PathVariable String status){
		if(status != null && chequeBookService.findById(id) != null) {
			ChequeBook cheque = chequeBookService.findById(id);
			cheque.setStatus(status);
			chequeBookService.save(cheque);
			return new ResponseEntity<ChequeBook>(cheque,HttpStatus.OK);
		}else {
			return new ResponseEntity<ChequeBook>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//***TRANSACTIONS***
	//deposit
	@GetMapping(path = "/transaction/deposit/{acc}/{amount}")
	public ResponseEntity<Transaction> deposit(@PathVariable long acc, @PathVariable double amount){
		Account account = accountService.findById(acc);
		if(account != null) {
			Transaction tran = account.deposit(amount);
			transactionService.save(tran);
			return new ResponseEntity<Transaction>(tran, HttpStatus.OK);
		}else {
			return new ResponseEntity<Transaction>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Withdraw
	@GetMapping(path = "/transaction/withdraw/{acc}/{amount}")
	public ResponseEntity<Transaction> withdraw(@PathVariable long acc, @PathVariable double amount){
		Account account = accountService.findById(acc);
		if(account != null) {
			Transaction tran = account.withdraw(amount);
			transactionService.save(tran);
			return new ResponseEntity<Transaction>(tran, HttpStatus.OK);
		}else {
			return new ResponseEntity<Transaction>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Transfer
	@GetMapping(path = "/transaction/transfer/{accori}/{accdest}/{amount}")
	public ResponseEntity<Transaction[]> transfer(@PathVariable long accori, @PathVariable double amount, @PathVariable long accdest){
		Account accountOri = accountService.findById(accori);
		Account accountDest = accountService.findById(accdest);
		if(accountOri != null && accountDest != null) {
			Transaction tran[] = accountOri.transfer(amount, accountDest);
			transactionService.save(tran[0]);
			transactionService.save(tran[1]);
			return new ResponseEntity<Transaction[]>(tran, HttpStatus.OK);
		}else {
			return new ResponseEntity<Transaction[]>(HttpStatus.NOT_FOUND);
		}
	}
}