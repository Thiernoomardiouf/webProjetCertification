import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MembreService } from 'src/app/services/membre.service';
import { RoleListeService } from 'src/app/services/role-liste.service';
import { RoleService } from 'src/app/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  roles;
  membres;

  public roleForm: FormGroup;

  constructor(private fb: FormBuilder, private role: RoleListeService,
              private roleService: RoleService, 
              private membreService: MembreService){ 
                this.getRoles();
                this.getMembres();
              }

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      membre: new FormControl("", Validators.required),
      role: new FormControl("", Validators.required),
    });
  }

  public saveRoleMembre(){
    this.roleService.addRolesmembres(this.roleForm.value).subscribe((data) => {
      this.roleForm.reset();
      Swal.fire('Success','Le role a été attribué avec succès', 'success');
    }
    );
  }

  public getRoles(){
    this.role.getRoles()
    .subscribe(data=>{
      this.roles = data;
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
