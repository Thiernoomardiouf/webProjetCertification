import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../services/projet.service';
import { Chart } from 'chart.js';
import { GrapheService } from '../services/graphe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbreprojet = this.grapheService.nbreprojet;
  nbreprojettermine = this.grapheService.nbreprojettermine;
  nbreprojetencours = this.grapheService.nbreprojetencours;

  PieChart;

  constructor(
   // private projetService: ProjetService,
    private grapheService: GrapheService
    ) {
    // this.nbreProjet();
    // this.nbreProjetEtat(0);
    // this.nbreProjetEtat(1);
  }

  ngOnInit(): void {
    // this.PieChart = new Chart('pieChart', {
    //   type: 'pie',
    //   data: {
    //     labels: ["Terminé", "En cours"],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [this.nbreprojettermine, this.nbreprojetencours],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //       ],
    //     }]
    //   },
    //   options: {
    //     title: {
    //       Text: 'Projet',
    //       display: true,
    //     },
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });

    var ctxP = document.getElementById("pieChart");
    var myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["Terminer", "En Cours"],
        datasets: [{
          data: [this.grapheService.nbreprojettermine, this.grapheService.nbreprojetencours],
          backgroundColor: ["#0077F7", "#E9E6E6"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
        }]
      },
      options: {
        responsive: true
      }
    });

  }

  // public nbreProjet(){
  //   this.projetService.nbreProjet()
  //   .subscribe(resp=>{
  //     this.nbreprojet=resp;
  //   },err=>{
  //     console.log(err);
  //   })
  // }

  // public nbreProjetEtat(etat){
  //   if(etat==1){
  //     this.projetService.nbreProjetEtat(etat)
  //     .subscribe(resp=>{
  //       this.nbreprojettermine=resp;
  //     },err=>{
  //       console.log(err);
  //     })
  //   }else if(etat==0){
  //     this.projetService.nbreProjetEtat(etat)
  //     .subscribe(resp=>{
  //       this.nbreprojetencours=resp;
  //     },err=>{
  //       console.log(err);
  //     })
  //   }

  // }

}
