import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              private route: ActivatedRoute, private router: Router) {
                let id = this.route.snapshot.params.id;
                this.getProjet(id);
                this.nbrePhase(id);
                this.nbrePhaseEtat(id, 0);
                this.nbrePhaseEtat(id, 1);
              }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.projetService.nbrePhaseEtat(id, 1)
    .subscribe(resp=>{
      this.nbrephasetermine=resp;
      this.projetService.nbrePhaseEtat(id, 0)
      .subscribe(resp=>{
        this.nbrephaseencours=resp;
        this.PieChart = new Chart('pieChart', {
          type: 'pie',
          data: {
            labels: ["Terminé", "En cours"],
            datasets: [{
              label: 'Nombre de phase',
              data: [this.nbrephasetermine, this.nbrephaseencours],
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

  public deleteprojet(id){
    if(confirm("Voulez-vous vraiment supprimer l'utilisateur")){
      this.projetService.deleteProject(id)
      .subscribe(resp=>{
        this.router.navigate(['/dashboard']);
      }),err=>{
        console.log(err);
      }
    }
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

  public onclickPhase(id){
    this.router.navigate(['/phase/'+id]);
    console.log(id);
  }

}
