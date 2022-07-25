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

  public updateProject(projet: Projet, id):Observable<Projet>{
    return this.http.put<Projet>(this.host + "/projets/update/" + id, projet, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
      }
      );
  }

  public deleteProject(id){
    return this.http.delete(this.host + "/projets/delete/" + id);
  }

  public nbreProjet():Observable<Projet[]>{
    return this.http.get<Projet[]>(this.host + "/projets/nombre");
  }

  public nbrePhase(id):Observable<Projet[]>{
    return this.http.get<Projet[]>(this.host + "/projets/nombrePhases/" + id);
  }

  public nbrePhaseEtat(id, etat):Observable<Projet[]>{
    return this.http.get<Projet[]>(this.host + "/projets/nombrePhasesEtat/" + id + "/" + etat);
  }

  public nbreProjetEtat(etat):Observable<Projet[]>{
    return this.http.get<Projet[]>(this.host + "/projets/nombreProjetEtat/" + etat);
  }

}
