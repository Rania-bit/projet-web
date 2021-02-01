import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParticipantsComponent } from './participants/participants.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  
  { path: 'formateurs', component: FormateursComponent },
  { path: 'participants', component: ParticipantsComponent },
  { path: 'rechercher_session', component: RechercherComponent},
  {path: 'admin', component: AdminComponent },
 {path: './list', component:FormateursComponent}

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes, { enableTracing: true, relativeLinkResolution: 'legacy' }),
  RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
