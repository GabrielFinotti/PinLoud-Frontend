import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PinList } from '../../../interfaces/pins/pin-list';
import { PinAllData } from '../../../interfaces/pins/pin-all-data';

@Injectable({
  providedIn: 'root',
})
export class PinsService {
  private url!: string;
  private token!: string | null;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api/v1';
  }

  public getPinsList(): Observable<PinList[]> {
    return this.http.get<PinList[]>(`${this.url}/pins`);
  }

  public getPinAllData(id: number): Observable<PinAllData> {
    return this.http.get<PinAllData>(`${this.url}/pins/all_data/${id}`);
  }

  public createPin(pinData: FormData) {
    if (typeof window !== 'undefined') {
      this.token = sessionStorage.getItem('token');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(`${this.url}/pins/`, pinData, { headers });
  }
}
