import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../../interfaces/user-login';
import { UserRegister } from '../../../interfaces/user-register';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api/v1/user';
  }

  public userRegister(userData: UserRegister) {
    return this.http.post(`${this.url}`, {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });
  }

  public userLogin(userData: UserLogin) {
    return this.http.post(`${this.url}`, {
      email: userData.email,
      password: userData.password,
    });
  }
}
