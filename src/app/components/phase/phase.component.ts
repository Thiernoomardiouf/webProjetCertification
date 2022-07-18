import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    private projetService: ProjetService, private modalService: NgbModal, private router: Router
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
      projet_id: ["", Validators.required]
    });
  }

  public savePhase(){
    console.log(this.phaseForm.value);
     this.phaseService.addPhase(this.phaseForm.value).subscribe((data) => {
      this.phaseList.push(data);
      this.phaseForm.reset();
     });
  }

  public getProjets(){
    this.projetService.getProjets()
    .subscribe(data=>{
      this.projets=data;
      console.log(this.projets);
    },err=>{
      console.log(err);
    })
  }

}
