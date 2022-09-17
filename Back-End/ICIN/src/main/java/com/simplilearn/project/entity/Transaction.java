package com.simplilearn.project.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
	
	/**
	 * @param transactionID
	 * @param amount
	 * @param type
	 * @param tranDate
	 * @param balance
	 */
	public Transaction(double amount, TranType type, Date tranDate, double balance, String comments) {
		super();
		this.amount = amount;
		this.type = type;
		this.tranDate = tranDate;
		this.balance = balance;
		this.comments = new StringBuilder();
		this.comments.append(comments);
	}
	
	public Transaction(double amount, TranType type, Date tranDate, double balance) {
		super();
		this.amount = amount;
		this.type = type;
		this.tranDate = tranDate;
		this.balance = balance;
		this.comments = new StringBuilder();
	}

	public Transaction() {}

	
	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public double getBalanceAfterTran() {
		return balanceAfterTran;
	}

	public void setBalanceAfterTran(double balanceAfterTran) {
		this.balanceAfterTran = balanceAfterTran;
	}

	public Long getTransactionID() {
		return transactionID;
	}

	public void setTransactionID(Long transactionID) {
		this.transactionID = transactionID;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
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
		this.comments.append(" ").append(comment);
	}

	@Override
	public String toString() {
		return "Transaction [transactionID=" + transactionID + ", amount=" + amount + ", type=" + type + ", tranDate="
				+ tranDate + ", balance=" + balance + ", balanceAfterTran=" + balanceAfterTran + ", comments="
				+ comments + "]";
	}
	
	
}
