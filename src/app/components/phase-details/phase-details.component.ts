import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhaseService } from 'src/app/services/phase.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-phase-details',
  templateUrl: './phase-details.component.html',
  styleUrls: ['./phase-details.component.scss']
})
export class PhaseDetailsComponent implements OnInit {

  phase;
  id;

  @ViewChild('htmlData') htmlData!: ElementRef;

  constructor(private phaseService: PhaseService,
              private route: ActivatedRoute, private router: Router) {
                this.id = this.route.snapshot.params.id;
                this.getPhase(this.id);
              }

  ngOnInit(): void {
  }

  public getPhase(id){
    this.phaseService.getPhase(id)
    .subscribe(resp=>{
      this.phase=resp;
    }),err=>{
      console.log(err);
    }
  }

  public imprimerPhase(){
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('livrable.pdf');
    });
  }

}
