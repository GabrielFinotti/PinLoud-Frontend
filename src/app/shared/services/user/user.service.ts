import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../../interfaces/user/user-login';
import { UserRegister } from '../../../interfaces/user/user-register';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api/v1';
  }

  public userRegister(userData: UserRegister) {
    return this.http.post(`${this.url}/accounts/register/`, {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });
  }

  public userLogin(userData: UserLogin) {
    return this.http.post(`${this.url}/authentications/token/`, {
      email: userData.email,
      password: userData.password,
    });
  }
}
