import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleTokenService {
  private tokenSubject = new BehaviorSubject(
    typeof window !== 'undefined' ? sessionStorage.getItem('token') : null
  );

  public token$ = this.tokenSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event) => {
        if (event.key === 'token') {
          this.tokenSubject.next(
            typeof window !== 'undefined'
              ? sessionStorage.getItem('token')
              : null
          );
        }
      });
    }
  }
}
