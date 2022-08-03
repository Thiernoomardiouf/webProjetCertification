import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MembreService } from 'src/app/services/membre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.scss']
})
export class MembreComponent implements OnInit {

  public membreForm: FormGroup;

  constructor(private fb: FormBuilder, private membresService: MembreService) { }

  ngOnInit(): void {
    this.membreForm = this.fb.group({
      lastName: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      telephone: new FormControl("", Validators.required),
      matricule: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      enabled: new FormControl(1, Validators.required),
    });
  }

  public saveMembre(){
    this.membresService.addMembre(this.membreForm.value).subscribe((data) => {
      this.membreForm.reset();
      Swal.fire('Success','Membre ajouté avec succès', 'success');
    }
    );
  }

  public getMembres(){
    this.membresService.getMembres()
    .subscribe(data=>{
      console.log(data);
    }
    ,err=>{
      console.log(err);
    }
    )
  }

}
