import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  private url!: string;
  private token!: string | null;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api/v1';

    if (typeof window !== 'undefined') {
      this.token = sessionStorage.getItem('token');
    }
  }

  public getLikeData() {
    return this.http.get(`${this.url}/likes/`);
  }

  public setLikePin(likeData: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(`${this.url}/likes/`, { likeData }, { headers });
  }
}
