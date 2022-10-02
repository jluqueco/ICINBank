import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeBook, User } from '../dashboard/dashboard.component';
import { ChequeDataService } from '../service/data/cheque-data.service';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-user-admin-dashboard',
  templateUrl: './user-admin-dashboard.component.html',
  styleUrls: ['./user-admin-dashboard.component.css']
})
export class UserAdminDashboardComponent implements OnInit {

  users: User[] = []
  
  constructor(
    private userData: UserDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userData.retreiveUsers().subscribe(
      response => {
        this.users = response;
      }
    )
  }

  updateUser(arg0: string) {
    this.router.navigate(['user',arg0]);
  }
}
