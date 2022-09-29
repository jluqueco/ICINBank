package com.simplilearn.project.utility;

import java.util.Comparator;

import com.simplilearn.project.entity.Transaction;

public class SortTransactions implements Comparator<Transaction> {

	public int compare(Transaction a, Transaction b) {
		return (int) (b.getTransactionID() - a.getTransactionID());
	}

}
