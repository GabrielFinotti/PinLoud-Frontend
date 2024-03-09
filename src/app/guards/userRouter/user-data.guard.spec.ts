import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userDataGuard } from './user-data.guard';

describe('userDataGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userDataGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
