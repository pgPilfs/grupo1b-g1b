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
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginform: FormGroup;
  [x: string]: any;

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
    private clienteService: ClienteService,
  ) {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // this.returnUrl = this.router.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
  //   this.authservice.login(this.loginform.get("email")?.value, this.loginform.get("password")?.value)
  //   .subscribe(
  //     data => {
  //     this.router.navigate([this.returnUrl]);
  //   // this.router.navigate(['iniciar-sesion'])
  // console.log('paso');   
  // },
  //     error => {
  //      this.error = error;
  //     }
  //   );
     if (this.loginform.valid) {
       this.authservice.login(this.loginform.get("email")?.value, this.loginform.get("password")?.value).subscribe((res: any) => {
         if(res.success){
           console.log(res);
           alert(res.message);
           localStorage.setItem('token', res.token);
           this.router.navigate(['/menu/wallet']);
         }else{
           alert(res.message);
         }
     
     });
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
