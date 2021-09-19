import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginform: FormGroup;

  get email(): AbstractControl {
    return this.loginform.controls['email'];
  }
  get password(): AbstractControl {
    return this.loginform.controls['password'];
  }

  constructor(private formBuilder: FormBuilder) {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginform.valid) {
      console.log(this._v());
    }
  }
  _v() {
    return this.loginform.value;
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
