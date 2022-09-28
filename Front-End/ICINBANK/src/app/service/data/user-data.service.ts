import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  authenticateUser(username: string, password: string){    
    return this.http.get<boolean>(`http://localhost:8080/user/${username}/${password}`);
  }
}
