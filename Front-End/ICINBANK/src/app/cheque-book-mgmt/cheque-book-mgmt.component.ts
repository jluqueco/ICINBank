import { Component, OnInit } from '@angular/core';
import { ChequeBook } from '../dashboard/dashboard.component';
import { ChequeDataService } from '../service/data/cheque-data.service';

@Component({
  selector: 'app-cheque-book-mgmt',
  templateUrl: './cheque-book-mgmt.component.html',
  styleUrls: ['./cheque-book-mgmt.component.css']
})
export class ChequeBookMGMTComponent implements OnInit {
  requests: ChequeBook[] = [];
  constructor(
    private chequeData: ChequeDataService
  ) { }

  ngOnInit(): void {
    this.chequeData.getRequests().subscribe(
      response => {
        this.requests = response;
      }
    )
  }

  isNewStatus(status:string){
    return (status === 'NEW');
  }

}
