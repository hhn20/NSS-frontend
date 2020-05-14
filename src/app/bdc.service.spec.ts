import { TestBed } from '@angular/core/testing';

import { BdcService } from './bdc.service';

describe('BdcService', () => {
  let service: BdcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
