import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getProjets(){
    return this.http.get(this.host + "/projets");
  }

  public getProjet(id){
    return this.http.get(this.host + "/projets/" + id);
  }

  public addProject(data){
     return this.http.post<any>(this.host + "/projets/add", data, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }

  public nbreProjet(){
    return this.http.get(this.host + "/projets/nombre");
  }

}
