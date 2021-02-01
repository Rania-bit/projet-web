import { Component, OnInit, ViewChild } from '@angular/core';
import { Participant } from "../models/Participant";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participant: Participant = {
    firstName: '',
    lastName: '',
    email:'',
    addresse: '',
    job: ''
  }
  participants: Participant[];
  showForm: boolean =false;
  @ViewChild('Form') form: any;
  loaded: boolean =true;


  constructor() { }

  ngOnInit(): void {
    this.participants = [
      
    ];
  }

  loading(){
    this.loaded= false;
    setTimeout(()=>{
      this.participants;
      this.loaded= true;
    }, 1500);
  }

  deleteParticipant(participant){
    const index = this.participants.indexOf(participant);
    console.log(index)
    this.participants.splice(index, 1);
  }

  onSubmit({value, valid}: {value: Participant, valid: boolean}){
    if(!valid){
      console.log('Form is invalid');
    }else{
      this.participants.unshift(value);

      this.form.reset();
    }
  }

}
