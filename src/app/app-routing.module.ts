import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrableComponent } from './components/livrable/livrable.component';
import { MembreComponent } from './components/membre/membre.component';
import { PartenaireComponent } from './components/partenaire/partenaire.component';
import { PhaseDetailsComponent } from './components/phase-details/phase-details.component';
import { PhaseComponent } from './components/phase/phase.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ProjetEditComponent } from './components/projet-edit/projet-edit.component';
import { ZoneComponent } from './components/zone/zone.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projet/:id' , component: ProjetComponent},
  { path: 'projetEddit', component: ProjetEditComponent},
  { path: 'projetUpdate/:id', component: ProjetEditComponent},
  { path: 'partenaire', component: PartenaireComponent},
  { path: 'phase', component: PhaseComponent},
  { path: 'phase/:id', component: PhaseDetailsComponent},
  { path: 'phaseUpdate/:id', component: PhaseComponent},
  { path: 'livrable', component: LivrableComponent},
  { path: 'membre', component: MembreComponent},
  { path: 'zone', component: ZoneComponent},
  { path: 'profil', component: ProfilComponent},
  { path:'login', component: LoginComponent},
 // {path:'', redirectTo:'login', pathMatch: 'full'},
 // {path:'**',  redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
