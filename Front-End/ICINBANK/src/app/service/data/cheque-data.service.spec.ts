import { TestBed } from '@angular/core/testing';

import { ChequeDataService } from './cheque-data.service';

describe('ChequeDataService', () => {
  let service: ChequeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChequeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
