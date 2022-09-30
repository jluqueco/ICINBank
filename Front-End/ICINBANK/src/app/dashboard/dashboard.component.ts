import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountDataService } from '../service/data/account-data.service';
import { faArrowRight, faMoneyBill, faMoneyCheck, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { UserDataService } from '../service/data/user-data.service';


export class Account{
  constructor(
    public accountID: number,
    public balance: number,
    public owner: User,
    public transactions: Transaction[],
    public blockStatus: boolean,
    public type: string
  ){}
}

export class User{
  constructor(
    public username: string,
    public name: string,
    public lastName: string,
    public birthdate: Date,
    public phone: string,
    public userAdmin: boolean,
    public password: string,
    public userAccess: boolean[],
    public userActive: boolean
  ){}
}

export class Transaction{
  constructor(
    public transactionID: number,
    public amount: number,
    public type: string,
    public transDate: Date,
    public balance: number,
    public balanceAfterTran: number,
    public comments: string
  ){}
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username = ''
  accounts: Account[]= [];
  faArrowRight = faArrowRight;
  faMoneyBill = faMoneyBill;
  faMoneyCheck = faMoneyCheck;
  faExchangeAlt = faExchangeAlt;
  user!: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accountData: AccountDataService,
    private userData: UserDataService
    ) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['username'];
    this.accountData.getAccounts(this.username).subscribe(
      data => {
        
        this.accounts = data;
      }
    )
  }

}
