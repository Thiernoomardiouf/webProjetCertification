import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profil } from '../models/profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getProfils(){
    return this.http.get(this.host + "/profils");
  }

  public getProfil(id){
    return this.http.get(this.host + "/profils/" + id);
  }

  public addProfil(profil: Profil):Observable<Profil>{
    return this.http.post<Profil>(this.host + "/profils/add", profil, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }
}
