import { TestBed } from '@angular/core/testing';

import { ICINAuthenticationService } from './icinauthentication.service';

describe('ICINAuthenticationService', () => {
  let service: ICINAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ICINAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
