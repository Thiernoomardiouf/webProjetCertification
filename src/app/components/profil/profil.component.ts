import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MembreService } from 'src/app/services/membre.service';
import { ProfilService } from 'src/app/services/profil.service';
import { ProjetService } from 'src/app/services/projet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  projets;
  membres;

  public profilForm : FormGroup;

  constructor(private fb: FormBuilder, private profilService: ProfilService,
              private projetService: ProjetService,
              private membreService: MembreService) {
                this.getProjets();
                this.getMembres();
              }

  ngOnInit(): void {
    this.profilForm = this.fb.group({
      libelle: new FormControl("", Validators.required),
      projete: new FormControl("", Validators.required),
      membre: new FormControl("", Validators.required)
    });
  }

  public saveProfil(){
    this.profilService.addProfil(this.profilForm.value).subscribe((data) => {
      this.profilForm.reset();
      Swal.fire('Success','Profil ajouté avec succès', 'success');
    }
    );
  }

  public getProfil(){
   this.profilService.getProfils()
   .subscribe(data=>{
   }
   ,err=>{
     console.log(err);
   }
   )
 }

 public getProjets(){
   this.projetService.getProjets()
   .subscribe(data=>{
     this.projets = data;
   }
   ,err=>{
     console.log(err);
   }
   )
 }

  public getMembres(){
    this.membreService.getMembres()
    .subscribe(data=>{
      this.membres = data;
    }
    ,err=>{
      console.log(err);
    }
    )
  }

}
