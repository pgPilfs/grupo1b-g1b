import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
}) 

export class SigninComponent implements OnInit {

  step: number = 1; 
  constructor() { }
     
  ngOnInit(): void { }

  siguiente(){
    this.step  = this.step + 1;
  }
  anterior(){
    this.step = this.step - 1;
  }
  confirmado(){ }
 
}
