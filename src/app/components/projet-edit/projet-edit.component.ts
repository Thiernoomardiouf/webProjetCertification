import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { ProjetService } from 'src/app/services/projet.service';
import {ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet-edit',
  templateUrl: './projet-edit.component.html',
  styleUrls: ['./projet-edit.component.scss']
})
export class ProjetEditComponent implements OnInit {

  projetList: any = []
  partenaires;
  closeResult: string;

  public projetForm : FormGroup;

  constructor(
    private fb: FormBuilder, private projetService: ProjetService,
    private partenaireService: PartenaireService,
    private modalService: NgbModal, private router: Router
  ) {
    this.getPartenaires();
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
   this.projetService.addProject(this.projetForm.value).subscribe((data) => {
    this.projetList.push(data);
    this.projetForm.reset();
   });
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
