import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  public addLivrable(data){
     return this.http.post<any>(this.host + "/livrables/add", data, {
      headers: {
        'Authorization': 'application/json',
        'Content-Type': 'application/json',
      }
     }
     );
  }
}
