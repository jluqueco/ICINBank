package com.simplilearn.project.entity;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.decimal4j.util.DoubleRounder;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.simplilearn.project.errors.BlockedAccountException;
import com.simplilearn.project.errors.ICINTransactionException;
import com.simplilearn.project.errors.UserAccessException;
import com.simplilearn.project.utility.SortTransactions;

enum AccountType{
	PRIMARY,
	SAVING;
}

@Entity(name = "accounts")
@Table(name = "ACCOUNTS")
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long accountID;
	private double balance;
	@ManyToOne
	@JoinColumn(name = "username", nullable = false)
	private User owner;
	@OneToMany(mappedBy = "accountID")
	@JsonManagedReference
	List<Transaction> transactions;
	private boolean blockStatus;
	@Enumerated(EnumType.ORDINAL)
	private AccountType type;
	
	public Account() {}

	/**
	 * @param balance
	 * @param owner
	 * @param transactions
	 */
	public Account(double balance, User owner, AccountType type) {
		super();
		this.balance = DoubleRounder.round(balance, 2);
		this.owner = owner;
		transactions = new ArrayList<>();
		blockStatus = false;
		this.type = type;
	}

	public Long getAccountID() {
		return accountID;
	}

	public void setAccountID(Long accountID) {
		this.accountID = accountID;
	}

	public double getBalance() {
		return DoubleRounder.round(balance, 2);
	}

	public void setBalance(double balance) {
		this.balance = DoubleRounder.round(balance, 2);
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public List<Transaction> getTransactions() {
		Collections.sort(transactions, new SortTransactions());  //sort desc
		return transactions;
	}

	public void setTransactions(List<Transaction> transactions) {
		this.transactions = transactions;
	}

	public boolean isBlockStatus() {
		return blockStatus;
	}

	public void setBlockStatus(boolean blockStatus) {
		this.blockStatus = blockStatus;
	}

	public AccountType getType() {
		return type;
	}

	public void setType(AccountType type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Account [accountID=" + accountID + ", balance=" + balance + ", owner=" + owner + "]";
	}
	
	public Transaction deposit(double amount) {
		if(!blockStatus) {
			if(owner.getUserAccess()[0] && owner.isUserActive()) {
					Transaction t = new Transaction(amount,TranType.DEPOSIT,new Date(),getBalance());
					
					if(amount > 0) {
						balance = DoubleRounder.round(balance + amount, 2);
					}else {
						throw new ICINTransactionException("No negative deposits allowed");
					}
					
					t.setBalanceAfterTran(balance);
					return t;
			}else {
				throw new UserAccessException("User not allowed to deposit");
			}
		}else {
			throw new BlockedAccountException("Account is blocked");
		}
	}
	
	public Transaction deposit(double amount, String comments) {
		if(!blockStatus) {
			if(owner.getUserAccess()[0] && owner.isUserActive()) {
					Transaction t = new Transaction(amount,TranType.DEPOSIT,new Date(),getBalance(), comments);
					
					if(amount > 0) {
						balance = DoubleRounder.round(balance + amount, 2);
					}else {
						throw new ICINTransactionException("No negative deposits allowed");
					}
					
					t.setBalanceAfterTran(balance);
					return t;
			}else {
				throw new UserAccessException("User not allowed to deposit");
			}
		}else {
			throw new BlockedAccountException("Account is blocked");
		}
	}
	
	public Transaction withdraw(double amount) {
		if(!blockStatus) {
			if(owner.getUserAccess()[1] && owner.isUserActive()) {
				Transaction t = new Transaction(amount,TranType.WITHDRAW,new Date(),getBalance());
				
				if(balance - amount >= 0) {
					balance = DoubleRounder.round(balance - amount, 2);
				}else {
					throw new ICINTransactionException("amount cannot be greater than balance");
				}
				
				t.setBalanceAfterTran(balance);
				return t;
			}else {
				throw new UserAccessException("User not allowed to withdraw");
			}
		}else {
			throw new BlockedAccountException("Account is blocked");
		}
	}
	
	public Transaction withdraw(double amount, String comment) {
		if(!blockStatus) {
			if(owner.getUserAccess()[1] && owner.isUserActive()) {
				Transaction t = new Transaction(amount,TranType.WITHDRAW,new Date(),getBalance(), comment);
				
				if(balance - amount >= 0) {
					balance = DoubleRounder.round(balance - amount, 2);
				}else {
					throw new ICINTransactionException("amount cannot be greater than balance");
				}
				
				t.setBalanceAfterTran(balance);
				return t;
			}else {
				throw new UserAccessException("User not allowed to withdraw");
			}
		}else {
			throw new BlockedAccountException("Account is blocked");
		}
	}
	
	public Transaction[] transfer(double amount, Account destAccount) {
		if(!blockStatus) {
			if(owner.getUserAccess()[2] && owner.isUserActive()) {
				Transaction tArray[] = new Transaction[2]; //0 for origin, 1 for dest
				if(destAccount != null && (balance - amount) > 0) {
					Transaction origin = new Transaction(amount,TranType.TRANSFER_OUT,new Date(),getBalance(), "Transfer made to: " + destAccount.getOwner().getUsername());
					balance = DoubleRounder.round(balance - amount, 2);
					tArray[1] = transferIn(amount, destAccount);
					origin.setBalanceAfterTran(balance);
					tArray[0] = origin;
				}else {
					throw new ICINTransactionException("transfers cannot exceed the balance amount");
				}
				
				return tArray;
			}else{
				throw new UserAccessException("User not allowed to do transfers");
			}
		}else {
			throw new BlockedAccountException("Account is blocked");
		}
	}
	
	public Transaction[] transfer(double amount, Account destAccount, String comment) {
		if(!blockStatus) {
			if(owner.getUserAccess()[2] && owner.isUserActive()) {
				Transaction tArray[] = new Transaction[2]; //0 for origin, 1 for dest
				if(destAccount != null && (balance - amount) > 0) {
					Transaction origin = new Transaction(amount,TranType.TRANSFER_OUT,new Date(),getBalance(), "Transfer made to: " + destAccount.getOwner().getUsername());
					origin.addToComments(comment);
					balance = DoubleRounder.round(balance - amount, 2);
					tArray[1] = transferIn(amount, destAccount);
					origin.setBalanceAfterTran(balance);
					tArray[0] = origin;
				}else {
					throw new ICINTransactionException("transfers cannot exceed the balance amount");
				}
				
				return tArray;
			}else{
				throw new UserAccessException("User not allowed to do transfers");
			}
		}else {
			throw new BlockedAccountException("Account is blocked");
		}
	}
		
	private Transaction transferIn(double amount, Account destAccount) {
		Transaction destTrans = new Transaction(amount, TranType.TRANSFER_IN, new Date(), destAccount.getBalance(), "Transfer made from: " + this.getOwner().getUsername());
		destAccount.setBalance(DoubleRounder.round(destAccount.getBalance() + amount,2));
		destTrans.setBalanceAfterTran(destAccount.getBalance());
		
		return destTrans;
	}
}
