import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public updatePhase(phase: Phase, id):Observable<Phase>{
    return this.http.put<Phase>(this.host + "/phases/update/" + id, phase, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
      }
      );
  }

  public deletePhase(id){
    return this.http.delete(this.host + "/phases/delete/" + id);
  }
}
