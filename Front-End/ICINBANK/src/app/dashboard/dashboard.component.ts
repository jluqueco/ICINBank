import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Account{
  constructor(
    public id: number,
    public type: String,
    public balance: number
  ){}
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username = ''
  accounts = [
    new Account(1,'Primary',10000.20),
    new Account(2,'Primary',20000.20),
    new Account(3,'Primary',30000.20)
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['username'];
    console.log(this.username);
  }

}
