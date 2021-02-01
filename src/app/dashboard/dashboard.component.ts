import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  nbrSession: number;
  nbrParticipant: number;
  nbrFormateurs: number;
  listParticipant: any;  //liste des participants
  listSession: any;  //liste des sessions
  listFormateurs: any;  //liste des formateurs

  ngOnInit(): void {
    this.nbrSession=this.listSession.length;
    this.nbrParticipant=this.listParticipant.length;
    this.nbrFormateurs=this.listFormateurs.length;

}
}
