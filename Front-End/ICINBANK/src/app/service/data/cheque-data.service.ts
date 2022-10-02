import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChequeBook } from 'src/app/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ChequeDataService {

  constructor(private http: HttpClient) { }

  getBookTypes(){
    return this.http.get<string[]>(`http://localhost:8080/chequebook/listtypes`);
  }

  requestBook(account: number, pages: number){
    return this.http.post<ChequeBook>(`http://localhost:8080/chequebook/new/${account}/${pages}`,null);
  }

  getRequestsByUsername(username: string){
    return this.http.get<ChequeBook[]>(`http://localhost:8080/chequebook/list/${username}`);
  }

  getRequests(){
    return this.http.get<ChequeBook[]>(`http://localhost:8080/chequebook/list`);
  }
}
