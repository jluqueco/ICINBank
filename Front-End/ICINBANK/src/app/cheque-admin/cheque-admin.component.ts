import { Component, OnInit } from '@angular/core';
import { ChequeBook } from '../dashboard/dashboard.component';
import { ChequeDataService } from '../service/data/cheque-data.service';

@Component({
  selector: 'app-cheque-admin',
  templateUrl: './cheque-admin.component.html',
  styleUrls: ['./cheque-admin.component.css']
})
export class ChequeAdminComponent implements OnInit {

  rejected = false;
  approved = false;
  requests: ChequeBook[] = [];
  chequeSuccess!: ChequeBook;
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

  isApprovedStatus(status:string){
    return (status === 'APPROVED');
  }

  isRejectedStatus(status:string){
    return (status === 'REJECTED');
  }

  rejectRequest(cheque: ChequeBook) {
    this.chequeData.setStatus(cheque.chequeBookID,'REJECTED').subscribe(
      response => {
        console.log(response);
        this.rejected = true;
        this.chequeSuccess = response;
      }
    );
  }
  approveRequest(cheque: ChequeBook) {
    this.chequeData.setStatus(cheque.chequeBookID,'APPROVED').subscribe(
      response => {
        console.log(response);
        this.approved = true;
        this.chequeSuccess = response;
      }
    );
  }

}
