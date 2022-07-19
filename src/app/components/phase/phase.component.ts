import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Projet } from 'src/app/models/projet';
import { PhaseService } from 'src/app/services/phase.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit {

  phaseList: any = []
  projets;

  public phaseForm: FormGroup;

  constructor(
    private fb: FormBuilder, private phaseService: PhaseService,
    private projetService: ProjetService
  ) {
    this.getProjets();
  }

  ngOnInit(): void {
    this.phaseForm = this.fb.group({
      libelle : new FormControl("", Validators.required),
      code: new FormControl("", Validators.required),
      etat_realisation: new FormControl("", Validators.required),
      montant: new FormControl("", Validators.required),
      date_debut: new FormControl("", Validators.required),
      date_fin: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      projet: new FormControl("", Validators.required)
    });
  }

  public savePhase(){
     this.phaseService.addPhase(this.phaseForm.value).subscribe((data) => {
      this.phaseList.push(data);
      this.phaseForm.reset();
     });
  }

  public getProjets(){
    this.projetService.getProjets()
    .subscribe(data=>{
      this.projets=data;
    },err=>{
      console.log(err);
    })
  }

}
