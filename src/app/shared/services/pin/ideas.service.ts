import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ideas } from '../../../interfaces/ideas/ideas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api/v1';
  }

  public getIdeas(): Observable<Ideas[]> {
    return this.http.get<Ideas[]>(`${this.url}/ideas`);
  }
}
