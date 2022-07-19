import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LivrableService } from 'src/app/services/livrable.service';
import { PhaseService } from 'src/app/services/phase.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-livrable',
  templateUrl: './livrable.component.html',
  styleUrls: ['./livrable.component.scss']
})
export class LivrableComponent implements OnInit {

  phases;
  projets;

  public livrableForm : FormGroup;

  constructor(private fb: FormBuilder, private phaseService: PhaseService,
              private livrableService: LivrableService, private projetService: ProjetService) {
                this.getPhases();
                this.getProjets();
              }

  ngOnInit(): void {
    this.livrableForm = this.fb.group({
      code: new FormControl("", Validators.required),
      libelle: new FormControl("", Validators.required),
      chemin: new FormControl("", Validators.required),
      phase: new FormControl("", Validators.required)
    });
  }

  public saveLivrable(){
    this.livrableService.addLivrable(this.livrableForm.value).subscribe((data) => {
      this.livrableForm.reset();
    });
  }

  public getPhases(){
    this.phaseService.getPhases()
    .subscribe(data=>{
      this.phases = data;
    },err=>{
      console.log(err);
    })
  }

  public getProjets(){
    this.projetService.getProjets()
    .subscribe(data=>{
      this.projets = data;
    },err=>{
      console.log(err);
    })
  }

}
