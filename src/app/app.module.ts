import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SessionsComponent } from './sessions/sessions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParticipantsComponent } from './participants/participants.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { TrackTableComponent } from './dashboard/track-table/track-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormateurTableComponent } from './dashboard/formateur-table/formateur-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SessionsComponent,
    DashboardComponent,
    ParticipantsComponent,
    FormateursComponent,
    RechercherComponent,
    TrackTableComponent,
    FormateurTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
