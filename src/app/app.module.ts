import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ProjetComponent } from './projet/projet.component';
import { PartenaireComponent } from './components/partenaire/partenaire.component';
import { ProjetEditComponent } from './components/projet-edit/projet-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhaseComponent } from './components/phase/phase.component';
import { LivrableComponent } from './components/livrable/livrable.component';
import { MembreComponent } from './components/membre/membre.component';
import { ZoneComponent } from './components/zone/zone.component';
import { ProfilComponent } from './components/profil/profil.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { PhaseDetailsComponent } from './components/phase-details/phase-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    ProjetComponent,
    PartenaireComponent,
    ProjetEditComponent,
    PhaseComponent,
    LivrableComponent,
    MembreComponent,
    ZoneComponent,
    ProfilComponent,
    PhaseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
