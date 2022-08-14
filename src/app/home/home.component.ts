import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../services/projet.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nbreprojet;
  nbreprojettermine;
  nbreprojetencours;

  PieChart;

  constructor(
   private projetService: ProjetService
    ) {
     this.nbreProjet();
     this.nbreProjetEtat(0);
     this.nbreProjetEtat(1);
  }

  ngOnInit(): void {
    this.projetService.nbreProjetEtat(1)
    .subscribe(resp=>{
      this.nbreprojettermine=resp;
      this.projetService.nbreProjetEtat(0)
      .subscribe(resp=>{
        this.PieChart = new Chart('pieChart', {
          type: 'pie',
          data: {
            labels: ["Terminé", "En cours"],   
            datasets: [{
              label: 'Nombre de projet',
              data: [this.nbreprojettermine, this.nbreprojetencours],
              backgroundColor: ["#0077F7", "#E9E6E6"],
            }]
          },
          options: {
            title: {
              Text: 'Phase',
              display: true,
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      });
    });
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
