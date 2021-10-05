import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Login } from 'src/app/servicios/cliente.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginform: FormGroup;
  [x: string]: any;
  cliente: Login = new Login();
  error: string = '';

  get email(): AbstractControl {
    return this.loginform.controls['email'];
  }
  get password(): AbstractControl {
    return this.loginform.controls['password'];
  }

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router,
  ) {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // this.returnUrl = this.router.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit(event: Event, cliente: Login) {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.loginform.valid) {
      console.log(cliente);
      console.log(this.loginform.value); //se puede enviar al servidor...
      this.authservice.login(cliente).subscribe(
        (data) => {
          console.log('DATA' + JSON.stringify(data));
          //localStorage.setItem('auth-token', JSON.stringify(data));

          this.router.navigate(['menu/wallet']);
        },
        (error) => {
          this.error = error;
        }
      );
    } else {
      this.form.markAllAsTouched(); //Activa todas las validaciones
    }
  }

  get emailField() {
    return this.loginform.get('email');
  }
  get passwordField() {
    return this.loginform.get('password');
  }
}
 

// export class LoginComponent {
//   hide = true;
//   loginForm: FormGroup;

//   constructor() {
//     this.loginForm = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', [Validators.required]),
//     });
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       console.log(this._v());
//     }
//   }
//   _v() {
//     return this.loginForm.value;
//   }
// }
