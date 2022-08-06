import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'src/app/models/phase';
import { PhaseService } from 'src/app/services/phase.service';
import { ProjetService } from 'src/app/services/projet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit {

  phaseList: any = []
  projets;
  id;

  public phaseForm: FormGroup;

  constructor(
    private fb: FormBuilder, private phaseService: PhaseService,
    private projetService: ProjetService, private route: ActivatedRoute,
    private router: Router
  ) {
    this.getProjets();
    this.id = this.route.snapshot.params.id;
    this.getPhase(this.id);
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
    if(this.phaseForm.valid){
      if(this.phaseForm.dirty){
        const p: Phase = {
          ...this.phaseForm.value,
          id: this.id
          };
        if(p.id==null){
          this.phaseService.addPhase(p)
          .subscribe(resp=>{
            Swal.fire('Success','La phase a été ajouté avec succès', 'success');
            this.phaseForm.reset();
            this.router.navigate(['/dashboard']);
          }),err=>{
            console.log(err);
          }
        }else{
          this.phaseService.updatePhase(p,this.id)
          .subscribe(resp=>{
            Swal.fire('Success','La phase est modifié avec succès', 'success');
            this.phaseForm.reset();
            this.router.navigate(['/phase/'+this.id]);
          }),err=>{
            console.log(err);
          }
        }
      }
     }
  }

  public getProjets(){
    this.projetService.getProjets()
    .subscribe(data=>{
      this.projets=data;
    },err=>{
      console.log(err);
    })
  }

  public getPhase(id){
    this.phaseService.getPhase(id)
    .subscribe(data=>{
      this.phaseForm.patchValue(data);
    },err=>{
      console.log(err);
    })
  }

}
