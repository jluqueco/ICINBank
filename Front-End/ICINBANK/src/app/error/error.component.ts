import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'An error ocurred! contact support at jluque@gmail.com';
  constructor() { }

  ngOnInit(): void {
  }

}
