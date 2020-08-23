import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Location } from '../model/location';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private http: HttpClient) {}

  saveLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(environment.urlSaveLocation, location);
  }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(environment.urlGetLocations);
  }

  getLocationById(id: number): Observable<Location> {
    const params = new HttpParams().set('id', `${id}`);
    return this.http.get<Location>(environment.urlGetLocationById, { params });
  }

  getLocationsByParent(parent: Location): Observable<Location[]> {
    const params = new HttpParams().set('parent', JSON.stringify(parent));
    return this.http.get<Location[]>(environment.urlGetLocationByParent, { params });
  }
}
