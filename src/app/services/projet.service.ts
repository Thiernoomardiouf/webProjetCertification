import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getProjets():Observable<Projet[]>{
    return this.http.get<Projet[]>(this.host + "/projets");
  }

  public getProjet(id){
    return this.http.get(this.host + "/projets/" + id);
  }

  public addProject(projet: Projet):Observable<Projet>{
    return this.http.post<Projet>(this.host + "/projets/add", projet, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }

  public nbreProjet():Observable<Projet[]>{
    return this.http.get<Projet[]>(this.host + "/projets/nombre");
  }

}
