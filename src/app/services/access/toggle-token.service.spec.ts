import { TestBed } from '@angular/core/testing';

import { ToggleTokenService } from './toggle-token.service';

describe('ToggleTokenService', () => {
  let service: ToggleTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
