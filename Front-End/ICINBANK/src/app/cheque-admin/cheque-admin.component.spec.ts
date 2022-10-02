import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeAdminComponent } from './cheque-admin.component';

describe('ChequeAdminComponent', () => {
  let component: ChequeAdminComponent;
  let fixture: ComponentFixture<ChequeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
