import { TestBed } from '@angular/core/testing';

import { BalanceLibService } from './balance-lib.service';

describe('BalanceLibService', () => {
  let service: BalanceLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
