import { Component, OnInit } from '@angular/core';
import { ChequeBook } from '../dashboard/dashboard.component';
import { ChequeDataService } from '../service/data/cheque-data.service';

@Component({
  selector: 'app-cheque-admin',
  templateUrl: './cheque-admin.component.html',
  styleUrls: ['./cheque-admin.component.css']
})
export class ChequeAdminComponent implements OnInit {

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
