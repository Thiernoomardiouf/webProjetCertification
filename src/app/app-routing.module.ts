import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartenaireComponent } from './components/partenaire/partenaire.component';
import { ProjetEditComponent } from './components/projet-edit/projet-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projet/:id' , component: ProjetComponent},
  { path: 'projetEddit', component: ProjetEditComponent},
  { path: 'partenaire', component: PartenaireComponent}
  //{path:'login', component: LoginComponent},
 // {path:'', redirectTo:'login', pathMatch: 'full'},
 // {path:'**',  redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
