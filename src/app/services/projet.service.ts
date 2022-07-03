import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
