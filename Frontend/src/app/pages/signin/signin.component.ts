import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  mail=new FormControl('', [Validators.required, Validators.email]);
  pass=new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8),Validators.pattern('[a-zA-Z]')]);
  name=new FormControl('', [Validators.required]);
  surname= new FormControl('', [Validators.required]);
  user= new FormControl('', [Validators.required]);
  cpass=new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8),Validators.pattern('[a-zA-Z]')]);
  
  constructor() { 
   
  }

  ngOnInit(): void {
  }

  get mailField(){
    return this.mail;
  }

  get passField(){
    return this.pass;
  }
  get userField(){
    return this.user;
  }
  get surnameField(){
    return this.surname;
  }
  get nameField(){
    return this.name;
  }
  get cpassField(){
    return this.cpass;
  }

}
