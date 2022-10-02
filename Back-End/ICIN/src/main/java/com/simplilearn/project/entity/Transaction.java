package com.simplilearn.project.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.decimal4j.util.DoubleRounder;

import com.fasterxml.jackson.annotation.JsonBackReference;

enum TranType{
	DEPOSIT,
	WITHDRAW,
	TRANSFER_IN,
	TRANSFER_OUT
}

@Entity
@Table(name = "TRANSACTIONS")
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long transactionID;
	private double amount;
	private TranType type;
	private Date tranDate;
	private double balance;
	private double balanceAfterTran;
	private StringBuilder comments;
	@ManyToOne
	@JoinColumn(nullable = false)
	@JsonBackReference
	private Account accountID;
	
	/**
	 * @param transactionID
	 * @param amount
	 * @param type
	 * @param tranDate
	 * @param balance
	 */
	public Transaction(double amount, TranType type, Date tranDate, double balance, String comments) {
		super();
		this.amount = DoubleRounder.round(amount, 2);
		this.type = type;
		this.tranDate = tranDate;
		this.balance = DoubleRounder.round(balance,2);
		this.comments = new StringBuilder();
		this.comments.append(comments);
	}
	
	public Transaction(double amount, TranType type, Date tranDate, double balance) {
		super();
		this.amount = DoubleRounder.round(amount,2);
		this.type = type;
		this.tranDate = tranDate;
		this.balance = DoubleRounder.round(balance,2);
		this.comments = new StringBuilder();
	}

	public Transaction() {}

	
	public double getBalance() {
		return DoubleRounder.round(balance,2);
	}

	public void setBalance(double balance) {
		this.balance = DoubleRounder.round(balance,2);
	}

	public double getBalanceAfterTran() {
		return DoubleRounder.round(balanceAfterTran,2);
	}

	public void setBalanceAfterTran(double balanceAfterTran) {
		this.balanceAfterTran = DoubleRounder.round(balanceAfterTran,2);
	}

	public Long getTransactionID() {
		return transactionID;
	}

	public void setTransactionID(Long transactionID) {
		this.transactionID = transactionID;
	}

	public double getAmount() {
		return DoubleRounder.round(amount,2);
	}

	public void setAmount(double amount) {
		this.amount = DoubleRounder.round(amount,2);
	}

	public TranType getType() {
		return type;
	}

	public void setType(TranType type) {
		this.type = type;
	}

	public Date getTranDate() {
		return tranDate;
	}

	public void setTranDate(Date tranDate) {
		this.tranDate = tranDate;
	}

	public StringBuilder getComments() {
		return comments;
	}

	public void setComments(StringBuilder comments) {
		this.comments = comments;
	}
	
	public void addToComments(String comment) {
		this.comments.append(" - ").append(comment);
	}

	public Account getAccountID() {
		return accountID;
	}

	public void setAccountID(Account accountID) {
		this.accountID = accountID;
	}

	public void setTransactionID(long transactionID) {
		this.transactionID = transactionID;
	}

	@Override
	public String toString() {
		return "Transaction [transactionID=" + transactionID + ", amount=" + amount + ", type=" + type + ", tranDate="
				+ tranDate + ", balance=" + balance + ", balanceAfterTran=" + balanceAfterTran + ", comments="
				+ comments + ", accountID=" + accountID + "]";
	}
	
}
