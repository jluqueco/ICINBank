import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeBookMGMTComponent } from './cheque-book-mgmt.component';

describe('ChequeBookMGMTComponent', () => {
  let component: ChequeBookMGMTComponent;
  let fixture: ComponentFixture<ChequeBookMGMTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeBookMGMTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeBookMGMTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
