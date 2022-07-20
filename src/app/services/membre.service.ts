import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Membre } from '../models/membre';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';


  constructor(private http: HttpClient) { }

  public getMembres(){
    return this.http.get(this.host + "/membres");
  }

  public getMembre(id){
    return this.http.get(this.host + "/membres/" + id);
  }

  public addMembre(membre: Membre):Observable<Membre>{
    return this.http.post<Membre>(this.host + "/membres/add", membre, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }
}
