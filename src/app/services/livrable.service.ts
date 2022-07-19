import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livrable } from '../models/livrable';

@Injectable({
  providedIn: 'root'
})
export class LivrableService {

  public host:string = 'http://localhost:8080/gestionprojets/v1';

  constructor(private http: HttpClient) { }

  public getLivrables(){
    return this.http.get(this.host + "/livrables");
  }

  public getLivrable(id){
    return this.http.get(this.host + "/livrables/" + id);
  }

  public addLivrable(livrable: Livrable):Observable<Livrable>{
    return this.http.post<Livrable>(this.host + "/livrables/add", livrable, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }
}
