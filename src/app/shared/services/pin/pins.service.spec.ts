import { TestBed } from '@angular/core/testing';

import { PinsService } from './pins.service';

describe('PinsService', () => {
  let service: PinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
