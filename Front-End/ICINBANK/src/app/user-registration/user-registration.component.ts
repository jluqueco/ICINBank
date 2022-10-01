import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../dashboard/dashboard.component';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user!: User;
  success = false;

  constructor(private router: Router, private userData: UserDataService) { }

  ngOnInit(): void {
    this.user = new User('','','',new Date(),'',false,'',false,false,false,true);
  }

  register() {
    this.userData.saveUser(this.user).subscribe(
      data => {
        console.log(data);
        this.success = true;
        this.user = new User('','','',new Date(),'',false,'',false,false,false,true);
      }
    )
  }

}
