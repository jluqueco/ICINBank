import { Injectable } from '@angular/core';
import { User } from '../dashboard/dashboard.component';
import { UserDataService } from './data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ICINAuthenticationService {
  authenticateUser = false;
  user: User | undefined;
  constructor(private userDataService: UserDataService) { }

  authenticate(username: string, password: string){
    return this.userDataService.authenticateUser(username,password);
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');

    return !(user === null);
  }

  getUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    if(user != null){
      return user;
    }else{
      return '';
    }
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

  authenticateUpdate(username: string){
    if(this.authenticateUser) {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }else{
      return false;
    }
  }

  isUserAdmin(){
    if (this.getUserLoggedIn() != ''){
      return this.userDataService.getUser(this.getUserLoggedIn()).subscribe(
        response => { 
          this.user = response
          console.log(response);
          if(this.user.userAdmin){
            console.log('from icin ' + this.user.userAdmin);
            return true;
          }else{
            return false;
          }
        }
      )
    }else{
      return false;
    }
  }
}
