import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { ProjetService } from 'src/app/services/projet.service';
import {ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/models/projet';

@Component({
  selector: 'app-projet-edit',
  templateUrl: './projet-edit.component.html',
  styleUrls: ['./projet-edit.component.scss']
})
export class ProjetEditComponent implements OnInit {

  projetList: any = []
  partenaires;
  closeResult: string;
  projet;
  id;

  public projetForm : FormGroup;

  constructor(
    private fb: FormBuilder, private projetService: ProjetService,
    private partenaireService: PartenaireService, private route: ActivatedRoute,
    private modalService: NgbModal, private router: Router
  ) {
    this.getPartenaires();
    this.id = this.route.snapshot.params.id;
    this.getProjet(this.id);
   }

  ngOnInit(): void {
    this.projetForm = this.fb.group({
      nom: new FormControl("", Validators.required),
      code:new FormControl("", Validators.required),
      cout: new FormControl("", Validators.required),
      date_debut: new FormControl("", Validators.required),
      date_fin: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      partenaire: new FormControl("", Validators.required)
    });
}

public saveProjet(){
   if(this.projetForm.valid){
    if(this.projetForm.dirty){
      const p: Projet = {
        ...this.projetForm.value,
        id: this.id
        };
      if(p.id==null){
        this.projetService.addProject(p)
        .subscribe(resp=>{
          this.router.navigate(['/dashboard']);
        }),err=>{
          console.log(err);
        }
      }else{
        this.projetService.updateProject(p,this.id)
        .subscribe(resp=>{
          this.projetForm.reset();
          this.router.navigate(['/projet/'+this.id]);
        }),err=>{
          console.log(err);
        }
      }
    }
   }
}

public savePartenaire(data){
  this.partenaireService.addPartenaire(data)
  .subscribe(resp=>{
    this.router.navigate(['/projetEddit']);
  },err=>{
    console.log(err);
  })
}

public getPartenaires(){
  this.partenaireService.getPartenaires()
  .subscribe(data=>{
    this.partenaires=data
  },err=>{
    console.log(err);
  })
}

public getProjet(id){
  this.projetService.getProjet(id)
  .subscribe(data=>{
    this.projetForm.patchValue(data);
  }),err=>{
    console.log(err);
  }
}

open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

}
