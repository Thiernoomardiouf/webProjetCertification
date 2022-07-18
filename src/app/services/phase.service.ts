import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phase } from '../models/phase';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getPhases(){
    return this.http.get(this.host + "/phases");
  }

  public getPhase(id){
    return this.http.get(this.host + "/phases/" + id);
  }

  public addPhase(phase: Phase){
     return this.http.post<any>(this.host + "/phases/add", phase, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }
}
