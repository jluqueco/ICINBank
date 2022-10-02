import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../dashboard/dashboard.component';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User('','','',new Date(),'',false,'',[false,false,false],true);
  username =''
  constructor(private userData: UserDataService, 
    private router: ActivatedRoute,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.username = this.router.snapshot.params['username'];
    this.userData.getUser(this.username).subscribe(
      response =>{
        this.user = response;
      }
    )
  }

  updateUser() {
    this.userData.saveUser(this.user).subscribe(
      response => {
        console.log(response);
        //this.route.navigate(['useradmindashboard',this.username])
      }
    )
  }

}
