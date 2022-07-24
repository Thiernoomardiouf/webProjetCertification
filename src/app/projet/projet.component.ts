import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from '../services/projet.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  projet;
  nbrephase;
  nbrephaseencours;
  nbrephasetermine;

  PieChart;

  constructor(private projetService:ProjetService,
              private route: ActivatedRoute) {
                let id = this.route.snapshot.params.id;
                this.getProjet(id);
                this.nbrePhase(id);
                this.nbrePhaseEtat(id, 0);
                this.nbrePhaseEtat(id, 1);
              }

  ngOnInit(): void {
    var ctxP = document.getElementById("pieChart");
    var myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["Terminer", "En Cours"],
        datasets: [{
          data: [this.nbrephasetermine, this.nbrephaseencours],
          backgroundColor: ["#0077F7", "#E9E6E6"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  getProjet(id){
     this.projetService.getProjet(id)
     .subscribe(data=>{
       this.projet=data;
     },err=>{
      console.log(err);
     })
  }

  public nbrePhase(id){
    this.projetService.nbrePhase(id)
    .subscribe(resp=>{
      this.nbrephase=resp;
    },err=>{
      console.log(err);
    })
  }
  public nbrePhaseEtat(id, etat){
    if(etat==1){
      this.projetService.nbrePhaseEtat(id, etat)
      .subscribe(resp=>{
        this.nbrephasetermine=resp;
      },err=>{
        console.log(err);
      })
    }else if(etat==0){
      this.projetService.nbrePhaseEtat(id, etat)
      .subscribe(resp=>{
        this.nbrephaseencours=resp;
      },err=>{
        console.log(err);
      })
    }
  }

}
