import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ideas } from '../../../interfaces/ideas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api/v1';
  }

  public getIdeas(token: string): Observable<Ideas[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Ideas[]>(`${this.url}/ideas`, { headers });
  }
}
