import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { createPinGuard } from './create-pin.guard';

describe('createPinGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => createPinGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
