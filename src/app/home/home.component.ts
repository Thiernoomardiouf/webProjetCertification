import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbreprojet;
  nbreprojettermine;
  nbreprojetencours;

  constructor(private projetService: ProjetService) {
    this.nbreProjet();
    this.nbreProjetEtat(0);
    this.nbreProjetEtat(1);
  }

  ngOnInit(): void {
  }

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

}
