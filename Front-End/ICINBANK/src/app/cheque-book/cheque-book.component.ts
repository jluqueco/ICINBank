import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account, ChequeBook } from '../dashboard/dashboard.component';
import { AccountDataService } from '../service/data/account-data.service';
import { ChequeDataService } from '../service/data/cheque-data.service';

@Component({
  selector: 'app-cheque-book',
  templateUrl: './cheque-book.component.html',
  styleUrls: ['./cheque-book.component.css']
})
export class ChequeBookComponent implements OnInit {
  username = '';
  accselected: any;
  accounts: Account[] = [];
  typeSelected: any;
  cheques: string[] = [];
  success = false;
  cheque!: ChequeBook;
  requests: ChequeBook[] = [];
  isNew = false;
  isApproved = false;
  isRejected = false;

  
  constructor(private chequeData: ChequeDataService, 
              private accountData: AccountDataService,
              private segment: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.segment.snapshot.params['username'];
    this.chequeData.getBookTypes().subscribe(
      response => {
        this.cheques = response;
      }
    )

    this.accountData.getAccounts(this.username).subscribe(
      response => {
        this.accounts = response;
      }
    )

    this.chequeData.getRequestsByUsername(this.username).subscribe(
      response => {
        console.log(response);
        this.requests = response;
      }
    )
  }

  requestChequeBook() {
    this.chequeData.requestBook(this.accselected, this.typeSelected).subscribe(
      data => {
        console.log(data);
        this.success = true;
        this.accselected = 0;
        this.typeSelected = 0;
        this.cheque = data;
      }
    )  
  }

  requestStatus(status: string){
    this.isNew = false;
    this.isApproved = false;
    this.isRejected = false;
    if(status === 'NEW'){
      this.isNew = true;
    }else if(status === 'APPROVED'){
      this.isApproved = true;
    }else{
      this.isRejected = true;
    }
  }

  isNewStatus(status:string){
    this.isNew = false;
    return (status === 'NEW');
  }

  isApprovedStatus(status:string){
    this.isApproved = false;
    return (status === 'APPROVED');
  }

  isRejectedStatus(status:string){
    this.isApproved = false;
    return (status === 'REJECTED');
  }

}
