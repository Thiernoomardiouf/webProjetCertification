import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
