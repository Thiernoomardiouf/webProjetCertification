import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';
import { ZoneService } from 'src/app/services/zone.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {

  projets;
  zones;

  public zoneForm : FormGroup;

  constructor(private fb: FormBuilder, private zoneService: ZoneService,
              private projetService: ProjetService) {
                this.getProjets();
                this.getZones();
               }

  ngOnInit(): void {
    this.zoneForm = this.fb.group({
      siege: new FormControl("", Validators.required),
      zone: new FormControl("", Validators.required),
      projetz: new FormControl("", Validators.required)
    });
  }

 public savePresence(){
   this.zoneService.addPresence(this.zoneForm.value).subscribe((data) => {
     this.zoneForm.reset();
      Swal.fire('Success','Presence ajoutée avec succès', 'success');
   }
   );
 }

 public getPresence(){
  this.zoneService.getPresences()
  .subscribe(data=>{
  }
  ,err=>{
    console.log(err);
  }
  )
}

  public getZones(){
    this.zoneService.getZones()
    .subscribe(data=>{
      this.zones = data;
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

}
