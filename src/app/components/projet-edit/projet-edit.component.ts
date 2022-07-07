import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-projet-edit',
  templateUrl: './projet-edit.component.html',
  styleUrls: ['./projet-edit.component.scss']
})
export class ProjetEditComponent implements OnInit {

  projetList: any = []

  public projetForm : FormGroup;

  constructor(
    private fb: FormBuilder, private projetService: ProjetService
  ) { }

  ngOnInit(): void {
    this.projetForm = this.fb.group({
      nom: new FormControl("", Validators.required),
      code:new FormControl("", Validators.required),
      cout: new FormControl("", Validators.required),
      presence: [''],
      date_debut: new FormControl("", Validators.required),
      date_fin: new FormControl("", Validators.required),
      document: [''],
      partenaire: [''],
      description: new FormControl("", Validators.required),
    });
}

public saveProjet(){
  console.log(this.projetForm.value);
   this.projetService.addProject(this.projetForm.value).subscribe((data) => {
    this.projetList.push(data);
    this.projetForm.reset();
   });
}

}
