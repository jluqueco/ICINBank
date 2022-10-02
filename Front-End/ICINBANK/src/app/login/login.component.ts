import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { User } from '../dashboard/dashboard.component';
import { UserDataService } from '../service/data/user-data.service';
import { ICINAuthenticationService } from '../service/icinauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;


  constructor(private router: Router, 
              private authenticationService: ICINAuthenticationService,
              private userData: UserDataService) { }

  ngOnInit(): void {
  }

  handleClick(){
    this.invalidLogin = false;
    this.authenticationService.authenticate(this.username,this.password).subscribe(
      data =>{
        if(data){
          sessionStorage.setItem('authenticatedUser', this.username);
          this.userData.getUser(this.username).subscribe(
            response => {
              console.log(response);
              if(response.userAdmin){
                this.router.navigate(['useradmindashboard',this.username]);
              }else{
                this.router.navigate(['dashboard',this.username]);
              }
            }
          )
        }else{
          this.invalidLogin = true;
        }
      },
      error => {
        this.invalidLogin=true;
      }
    )
  }

  register() {
    this.router.navigate(['userregistration']);
  }

}
