package com.simplilearn.project.entity;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

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

enum ChequeBookType{
	PAGES15,
	PAGES30,
	PAGES50,
	PAGES100
}

@Entity(name = "chequebooks")
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
	private ChequeBookType type;
	
	public ChequeBook() {}

	/**
	 * @param account
	 * @param user
	 */
	public ChequeBook(Account account, int type) {
		super();
		this.account = account;
		this.status = ChequeBookStatus.NEW;
		this.createdDate = new Date();
		this.lastModifiedDate = new Date();
		
		switch(type) {
			case 15: 
				this.type = ChequeBookType.PAGES15;
				break;
			case 30: 
				this.type = ChequeBookType.PAGES30;
				break;
			case 50: 
				this.type = ChequeBookType.PAGES50;
				break;
			case 100: 
				this.type = ChequeBookType.PAGES100;
				break;
			default:
				this.type = ChequeBookType.PAGES15;
		}
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

	public ChequeBookType getType() {
		return type;
	}

	public void setType(ChequeBookType type) {
		this.type = type;
	}

	public Long getChequeBookID() {
		return chequeBookID;
	}
	
	public List<String> getChequeBookTypes(){
		return checkChequeBookTypes();
	}
	
	private List<String> checkChequeBookTypes(){
		return Arrays.asList(ChequeBookType.values()).stream().map(Enum::toString).collect(Collectors.toList());
	}

	@Override
	public String toString() {
		return "ChequeBook [chequeBookID=" + chequeBookID + ", account=" + account + ", status=" + status
				+ ", createdDate=" + createdDate + ", lastModifiedDate=" + lastModifiedDate + ", type=" + type + "]";
	}
}
