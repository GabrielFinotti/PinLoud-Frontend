import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PinList } from '../../../interfaces/pins/pin-list';
import { PinAllData } from '../../../interfaces/pins/pin-all-data';
import { PinsCreate } from '../../../interfaces/pins/pins-create';

@Injectable({
  providedIn: 'root',
})
export class PinsService {
  private url!: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/api/v1';
  }

  public getPinsList(): Observable<PinList[]> {
    return this.http.get<PinList[]>(`${this.url}/pins`);
  }

  public getPinAllData(id: number): Observable<PinAllData> {
    return this.http.get<PinAllData>(`${this.url}/pins/all_data/${id}`);
  }

  public createPin(pinData: PinsCreate, token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(
      `${this.url}/pins/`,
      {
        title: pinData.title,
        description: pinData.description,
        image: pinData.image.name,
        ideas: pinData.ideas,
        user: pinData.user,
      },
      { headers }
    );
  }
}
