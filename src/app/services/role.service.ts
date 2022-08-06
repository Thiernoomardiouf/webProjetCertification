import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleMembre } from '../models/roleMembre';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getRolemembres(){
    return this.http.get(this.host + "/rolesmembres");
  }


  public getRolesmembres(id){
    return this.http.get(this.host + "/rolesmembres/" + id);
  }

  public addRolesmembres(rolesmembre: RoleMembre):Observable<RoleMembre>{
    return this.http.post<RoleMembre>(this.host + "/rolesmembres/add", rolesmembre, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }
}
