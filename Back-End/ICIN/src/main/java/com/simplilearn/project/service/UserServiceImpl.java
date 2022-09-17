package com.simplilearn.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.project.entity.User;
import com.simplilearn.project.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	public UserServiceImpl() {}
	
	/**
	 * @param userRepository
	 */
	public UserServiceImpl(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public User save(User theUser) {
		return userRepository.save(theUser);
	}

	@Override
	public User findById(String username) {
		 
		if(userRepository.findById(username).isPresent()) {
			return userRepository.findById(username).get();
		}

		return null;
	}

	@Override
	public boolean deleteById(String username) {
		 
		if(userRepository.findById(username).isPresent()) {
			userRepository.deleteById(username);
			return true;
		}
		return false;
	}

	@Override
	public void updateUserStatus(String username, boolean status) {
		if(userRepository.findById(username).isPresent()) {
			User user = userRepository.findById(username).get();
			user.setUserStatus(status);
		}

	}

}
