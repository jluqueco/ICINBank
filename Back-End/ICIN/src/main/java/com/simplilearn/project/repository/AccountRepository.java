package com.simplilearn.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.simplilearn.project.entity.Account;
@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
	@Query("select a from accounts a where a.owner.username = ?1" )
	public List<Account> getUserAccounts(String username);
}
