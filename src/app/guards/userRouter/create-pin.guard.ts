import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const createPinGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof window !== 'undefined') {
    const getToken = sessionStorage.getItem('token');

    if (getToken !== null) {
      return true;
    }
  }
  router.navigateByUrl('/account/form');
  return false;
};
