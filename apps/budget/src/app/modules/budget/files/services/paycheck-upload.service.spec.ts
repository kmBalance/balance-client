import { TestBed } from '@angular/core/testing';

import { PaycheckUploadService } from './paycheck-upload.service';

describe('PaycheckUploadService', () => {
  let service: PaycheckUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaycheckUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
