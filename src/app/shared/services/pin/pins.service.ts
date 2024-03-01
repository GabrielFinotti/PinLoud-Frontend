import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PinList } from '../../../interfaces/pin-list';
import { PinAllData } from '../../../interfaces/pin-all-data';

@Injectable({
  providedIn: 'root',
})
export class PinsService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/api/v1/pins';
  }

  public getPinsList(): Observable<PinList[]> {
    return this.http.get<PinList[]>(`${this.url}`);
  }

  public getPinAllData(id: number): Observable<PinAllData> {
    return this.http.get<PinAllData>(`${this.url}/all_data/${id}`);
  }
}
