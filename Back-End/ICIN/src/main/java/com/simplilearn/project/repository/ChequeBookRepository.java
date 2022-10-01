package com.simplilearn.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.simplilearn.project.entity.Account;
import com.simplilearn.project.entity.ChequeBook;
@Repository
public interface ChequeBookRepository extends JpaRepository<ChequeBook , Long> {
	@Query("select a from chequebooks a where a.account in(:accs)" )
	public List<ChequeBook> getChequesByAccounts(@Param("accs") List<Account> accs);
}
