import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick(){
    if(this.username === 'jluqueco' && this.password === '93wchsrs'){
      this.invalidLogin = false;
      this.router.navigate(['dashboard', this.username]);
    }else{
      this.invalidLogin = true;
    }
  }

}
