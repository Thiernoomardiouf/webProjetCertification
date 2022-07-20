import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presence } from '../models/presence';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getPresences(){
    return this.http.get(this.host + "/presences");
  }

  public getPresence(id){
    return this.http.get(this.host + "/presences/" + id);
  }

  public getZones(){
    return this.http.get(this.host + "/zones/");
  }

  public addPresence(presence: Presence):Observable<Presence>{
    return this.http.post<Presence>(this.host + "/presences/add", presence, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }
}
