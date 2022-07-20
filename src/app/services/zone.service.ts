import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zone } from '../models/zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getZones(){
    return this.http.get(this.host + "/zones");
  }

  public getZone(id){
    return this.http.get(this.host + "/zones/" + id);
  }

  public addZone(zone: Zone):Observable<Zone>{
    return this.http.post<Zone>(this.host + "/zones/add", zone, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }
}
