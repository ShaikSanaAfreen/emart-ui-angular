import { TestBed } from '@angular/core/testing';

import { EMartService } from './e-mart.service';

describe('EMartService', () => {
  let service: EMartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
