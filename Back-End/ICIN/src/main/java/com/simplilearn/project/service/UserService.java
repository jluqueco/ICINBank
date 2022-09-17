package com.simplilearn.project.service;

import java.util.List;

import com.simplilearn.project.entity.User;

public interface UserService {
	public List<User> findAll();
	public User save(User theUser);
	public User findById(String username);
	public boolean deleteById(String username);
	public void updateUserStatus(String username, boolean status);
}
