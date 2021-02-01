import { Component, OnInit, ViewChild } from '@angular/core';
import { Formateur } from "../models/Formateur";

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  formateur: Formateur = {
    firstName: '',
    lastName: '',
    email:'',
    addresse: '',
    domaine: ''
  }
  formateurs: Formateur[];
  showForm: boolean =false;
  @ViewChild('Form') form: any;
  loaded: boolean =true;


  constructor() { }

  ngOnInit(): void {
    this.formateurs = [
      
    ];
  }

  loading(){
    this.loaded= false;
    setTimeout(()=>{
      this.formateurs;
      this.loaded= true;
    }, 1500);
  }




  deleteFormateur(formateur){
    const index = this.formateurs.indexOf(formateur);
    console.log(index)
    this.formateurs.splice(index, 1);
  }

  onSubmit({value, valid}: {value: Formateur, valid: boolean}){
    if(!valid){
      console.log('Form is invalid');
    }else{
      this.formateurs.unshift(value);

      this.form.reset();
    }
  }

}
