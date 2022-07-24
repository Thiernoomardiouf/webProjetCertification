import { Injectable } from '@angular/core';
import { ProjetService } from './projet.service';

@Injectable({
  providedIn: 'root'
})
export class GrapheService {

  nbreprojet;
  nbreprojettermine;
  nbreprojetencours;

  nbrephase;
  nbrephaseencours;
  nbrephasetermine;

  constructor(private projetService: ProjetService) { 
    this.nbreProjet();
    this.nbreProjetEtat(0);
    this.nbreProjetEtat(1);
  }

  // Calculer le nombre de projet terminé et en cours

  public nbreProjet(){
    this.projetService.nbreProjet()
    .subscribe(resp=>{
      this.nbreprojet=resp;
    },err=>{
      console.log(err);
    })
  }

  public nbreProjetEtat(etat){
    if(etat==1){
      this.projetService.nbreProjetEtat(etat)
      .subscribe(resp=>{
        this.nbreprojettermine=resp;
      },err=>{
        console.log(err);
      })
    }else if(etat==0){
      this.projetService.nbreProjetEtat(etat)
      .subscribe(resp=>{
        this.nbreprojetencours=resp;
      },err=>{
        console.log(err);
      })
    }

  }

  // Calculer le pourcentage de phase terminer et encours

}
