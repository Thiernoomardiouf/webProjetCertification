import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private projService: ProjetService, private router:Router) { }

  projets;

  ngOnInit(): void {
    this.projService.getProjets()
    .subscribe(data=>{
      this.projets=data;
    }), err=>{
      console.log(err);
    }
  }

  onGetProjet(projet){
    this.router.navigateByUrl("/projet/" + projet.id);
  }

}
