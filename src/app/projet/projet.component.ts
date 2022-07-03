import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  projet;
  constructor(private projetService:ProjetService, 
              private route: ActivatedRoute) { 
                let id = this.route.snapshot.params.id;
                this.getProjet(id);
              }

  ngOnInit(): void {
    console.log(this.projet);
  }

  getProjet(id){
     this.projetService.getProjet(id)
     .subscribe(data=>{
       this.projet=data;
     },err=>{
      console.log(err);
     })
  }

}
