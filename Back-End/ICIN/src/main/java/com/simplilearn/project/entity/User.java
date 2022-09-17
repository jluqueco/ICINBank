package com.simplilearn.project.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "USERS")
public class User {
	@Id
	private String username;
	private String name;
	private String lastName;
	private Date birthdate;
	private String phone;
	private boolean depositAccess;
	private boolean withdrawAccess;
	private boolean transferAccess;
	private boolean userAdmin;
	private boolean activeUser;
	private String password;

	public User() {}
	
	/**
	 * @param username
	 * @param name
	 * @param lastName
	 * @param birthdate
	 * @param phone
	 */
	public User(String username, String name, String lastName, Date birthdate, String phone) {
		super();
		this.username = username;
		this.name = name;
		this.lastName = lastName;
		this.birthdate = birthdate;
		this.phone = phone;
		depositAccess = false;
		withdrawAccess = false;
		transferAccess = false;
		activeUser = true;
	}
	
	
	
	/**
	 * @param username
	 * @param name
	 * @param lastName
	 * @param birthdate
	 * @param phone
	 * @param userAdmin
	 */
	public User(String username, String name, String lastName, Date birthdate, String phone, boolean userAdmin) {
		super();
		this.username = username;
		this.name = name;
		this.lastName = lastName;
		this.birthdate = birthdate;
		this.phone = phone;
		this.setUserAdmin(userAdmin);
		this.activeUser = true;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Date getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public void setDepositAccess(boolean depositAccess) {
		this.depositAccess = depositAccess;
	}

	public void setWithdrawAccess(boolean withdrawAccess) {
		this.withdrawAccess = withdrawAccess;
	}

	public void setTransferAccess(boolean transferAccess) {
		this.transferAccess = transferAccess;
	}

	public boolean[] getUserAccess() {
		boolean accessArray[] = new boolean[3];
		
		accessArray[0] = depositAccess;
		accessArray[1] = withdrawAccess;
		accessArray[2] = transferAccess;
		
		return accessArray;
	}
	
	public boolean isUserAdmin() {
		return userAdmin;
	}

	public void setUserAdmin(boolean userAdmin) {
		this.userAdmin = userAdmin;
	}

	public boolean isUserActive() {
		return activeUser;
	}

	public void setUserStatus(boolean blockedUser) {
		this.activeUser = blockedUser;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", name=" + name + ", lastName=" + lastName + ", birthdate=" + birthdate
				+ ", phone=" + phone + ", depositAccess=" + depositAccess + ", withdrawAccess=" + withdrawAccess
				+ ", transferAccess=" + transferAccess + ", userAdmin=" + userAdmin + ", blockedUser=" + activeUser
				+ "]";
	}
}
