import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../../interfaces/user/user-login';
import { UserRegister } from '../../../interfaces/user/user-register';
import { Observable } from 'rxjs';
import { UserData } from '../../../interfaces/user/user-data';
import { UserResponse } from '../../../interfaces/user/user-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url!: string;
  private token!: string | null;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api/v1';

    if (typeof window !== 'undefined') {
      this.token = sessionStorage.getItem('token');
    }
  }

  public userRegister(userData: UserRegister) {
    return this.http.post(`${this.url}/accounts/register/`, {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });
  }

  public userLogin(userData: UserLogin): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.url}/authentications/token/`, {
      email: userData.email,
      password: userData.password,
    });
  }

  public getUserData(): Observable<UserData> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<UserData>(`${this.url}/accounts/user/`, { headers });
  }
}
