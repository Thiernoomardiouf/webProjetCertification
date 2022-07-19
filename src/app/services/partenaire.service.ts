import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partenaire } from '../models/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getPartenaires():Observable<Partenaire[]>{
    return this.http.get<Partenaire[]>(this.host + "/partenaires");
  }

  public getPartenaire(id){
    return this.http.get(this.host + "/partenaires/" + id);
  }

  public addPartenaire(partenaire: Partenaire):Observable<Partenaire>{
    return this.http.post<Partenaire>(this.host + "/partenaires/add", partenaire, {
     headers: {
       'Authorization': 'application/json',
       'Content-Type': 'application/json',
     }
    }
    );
 }

}
