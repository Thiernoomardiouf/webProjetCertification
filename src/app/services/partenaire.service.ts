import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partenaire } from '../models/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getPartenaires(){
    return this.http.get(this.host + "/partenaires");
  }

  public getPartenaire(id){
    return this.http.get(this.host + "/partenaires/" + id);
  }

  public addPartenaire(partenaire: Partenaire){
    return this.http.post<any>(this.host + "/partenaires/add", partenaire, {
     headers: {
       'Authorization': 'application/json',
       'Content-Type': 'application/json',
     }
    }
    );
 }

}
