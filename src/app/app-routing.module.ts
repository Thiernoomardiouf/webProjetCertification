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
import { AdminGuard } from './guards/admin.guard';
import { ChefprojetGuard } from './guards/chefprojet.guard';
import { EmployeGuard } from './guards/employe.guard';
import { SecretaireGuard } from './guards/secretaire.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [EmployeGuard] },
  { path: 'dashboard', component: DashboardComponent,  pathMatch: 'full', canActivate: [EmployeGuard] },
  { path: 'projet/:id' , component: ProjetComponent, pathMatch: 'full', canActivate: [ChefprojetGuard] },
  { path: 'projetEddit', component: ProjetEditComponent, pathMatch: 'full', canActivate: [SecretaireGuard]},
  { path: 'projetUpdate/:id', component: ProjetEditComponent, pathMatch: 'full', canActivate: [SecretaireGuard]},
  { path: 'partenaire', component: PartenaireComponent, pathMatch: 'full', canActivate: [SecretaireGuard]},
  { path: 'phase', component: PhaseComponent, pathMatch: 'full', canActivate: [ChefprojetGuard]},
  { path: 'phase/:id', component: PhaseDetailsComponent, pathMatch: 'full', canActivate: [ChefprojetGuard]},
  { path: 'phaseUpdate/:id', component: PhaseComponent, pathMatch: 'full', canActivate: [ChefprojetGuard]},
  { path: 'livrable', component: LivrableComponent, pathMatch: 'full', canActivate: [ChefprojetGuard]},
  { path: 'membre', component: MembreComponent,  pathMatch: 'full', canActivate: [AdminGuard]},
  { path: 'zone', component: ZoneComponent, pathMatch: 'full', canActivate: [AdminGuard]},
  { path: 'profil', component: ProfilComponent, pathMatch: 'full', canActivate: [AdminGuard]},
  { path:'login', component: LoginComponent},
 // {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'**',  redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
