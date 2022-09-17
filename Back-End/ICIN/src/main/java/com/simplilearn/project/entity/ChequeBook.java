package com.simplilearn.project.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.simplilearn.project.errors.ChequeBookStatusException;

enum ChequeBookStatus{
	NEW,
	APPROVED,
	REJECTED
}
@Entity
@Table(name = "CHEQUEBOOKS")
public class ChequeBook {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long chequeBookID;
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "accountID", nullable = false)
	private Account account;
	private ChequeBookStatus status;
	private Date createdDate;
	private Date lastModifiedDate;
	
	public ChequeBook() {}

	/**
	 * @param account
	 * @param user
	 */
	public ChequeBook(Account account) {
		super();
		this.account = account;
		this.status = ChequeBookStatus.NEW;
		this.createdDate = new Date();
		this.lastModifiedDate = new Date();
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public ChequeBookStatus getStatus() {
		return status;
	}

	public void setStatus(String status) {
		if(status.equalsIgnoreCase("Approved")) {
			this.status = ChequeBookStatus.APPROVED;
		}else if(status.equalsIgnoreCase("Rejected")){
			this.status = ChequeBookStatus.REJECTED;
		}else {
			throw new ChequeBookStatusException("Status not recognized", status);
		}
	}

	public Date getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(Date lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}
	
	public Date getCreatedDate() {
		return createdDate;
	}

	@Override
	public String toString() {
		return "ChequeBook [chequeBookID=" + chequeBookID + ", account=" + account + ", status=" + status
				+ ", createdDate=" + createdDate + ", lastModifiedDate=" + lastModifiedDate + "]";
	}
}
