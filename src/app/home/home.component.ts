import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbreprojet;

  constructor(private projetService: ProjetService) { 
    this.nbreProjet();
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

}
