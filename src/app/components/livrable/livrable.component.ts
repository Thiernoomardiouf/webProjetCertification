import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LivrableService } from 'src/app/services/livrable.service';
import { PhaseService } from 'src/app/services/phase.service';
import { ProjetService } from 'src/app/services/projet.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-livrable',
  templateUrl: './livrable.component.html',
  styleUrls: ['./livrable.component.scss']
})
export class LivrableComponent implements OnInit {

  phases;
  projet;
  livrables;
  selectedPhase;

  public livrableForm : FormGroup;

  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private fb: FormBuilder, private phaseService: PhaseService,
              private livrableService: LivrableService, private projetService: ProjetService) {
                this.getPhases();

              }

  ngOnInit(): void {
    this.livrableForm = this.fb.group({
      code: new FormControl("", Validators.required),
      libelle: new FormControl("", Validators.required),
      chemin: new FormControl("", Validators.required),
      phase: new FormControl("", Validators.required)
    });
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  public saveLivrable(){
    this.livrableService.addLivrable(this.livrableForm.value).subscribe((data) => {
      this.livrableForm.reset();
      this.openPDF();
    });
  }

  public getLivrables(){
    this.livrableService.getLivrables()
    .subscribe(data=>{
      this.livrables=data;
    }
    ,err=>{
      console.log(err);
    }
    )
  }

  public getPhases(){
    this.phaseService.getPhases()
    .subscribe(data=>{
      this.phases = data;
    },err=>{
      console.log(err);
    })
  }

  public getPhase(id){
    this.phaseService.getPhase(id)
    .subscribe(data=>{
    },err=>{
      console.log(err);
    })
  }

  getProjet(id){
    this.projetService.getProjet(id)
    .subscribe(data=>{
      this.projet=data;
    },err=>{
     console.log(err);
    })
 }

}
