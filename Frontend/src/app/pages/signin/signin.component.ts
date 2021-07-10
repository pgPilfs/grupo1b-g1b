import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {

 step: any = 1;
 
  constructor() { 
   
  }

  ngOnInit(): void {
  }

  siguiente(){
    this.step  = this.step + 1;
  }
  anterior(){
    this.step = this.step - 1;
  }
  confirmado(){
  
  
  }
}
