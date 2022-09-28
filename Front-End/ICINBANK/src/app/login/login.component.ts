import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { ICINAuthenticationService } from '../service/icinauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'jluqueco';
  password = '';
  invalidLogin = false;
  faSignInAlt = faSignInAlt;

  constructor(private router: Router, private authenticationService: ICINAuthenticationService) { }

  ngOnInit(): void {
  }

  handleClick(){
    this.authenticationService.authenticate(this.username,this.password)
    this.invalidLogin = this.authenticationService.authenticateUpdate(this.username);
    if(this.invalidLogin){
      this.invalidLogin = false;
      this.router.navigate(['dashboard', this.username]);
    }else{
      this.invalidLogin = true;
    }
  }

}
