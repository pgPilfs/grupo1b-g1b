import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/*export class LoginComponent implements OnInit {

  loginform: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginform= this.formBuilder.group(
      {
        mail:['', [Validators.required, Validators.email]]   
      }
    )

   }

  ngOnInit(): void {
  }

  get mailField()
  {
    return this.form.get("email1");
  }
  get mailInvalid()
  {
    return this.mailField.touched && !this.mailField.valid;
  }

  onEnviar(event: Event)
  {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.form.valid)
    {
      console.log(this.form.value); //se puede enviar al servidor...
    }
    else
    {
      this.form.markAllAsTouched(); //Activa todas las validaciones
    }
  }*/

  

  export class LoginComponent {

    loginForm: FormGroup;
    
    constructor() {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
      });
    }

    onSubmit() {
      if (this.loginForm.valid) {
        console.log(this._v());
      }
    }
    _v() {
      return this.loginForm.value;
    }
}
