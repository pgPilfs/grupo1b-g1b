import {
  Component,
  ViewChild,
  OnInit,
  Inject,
  Injectable,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { Cliente, ClienteService } from 'src/app/servicios/cliente.service';

// import { PerfilService } from 'src/app/servicios/perfil.service';
import Swal from 'sweetalert2';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  hide = true;
  hide1 = true;
  emailModificar: String;
  editForm: FormGroup;
  //public cliente: Cliente = new Cliente();
  perfil: any;
  onPasswordChange() {
    if (this.cpassword.value == this.password.value) {
      this.cpassword.setErrors(null);
    } else {
      this.cpassword.setErrors({ mismatch: true });
    }
  }
/*
  get alias(): AbstractControl {
    return this.editForm.controls['alias'];
  }*/
  get tel(): AbstractControl {
    return this.editForm.controls['tel'];
  }
  get email(): AbstractControl {
    return this.editForm.controls['email'];
  }
  get email2(): AbstractControl {
    return this.editForm.controls['email2'];
  }
  get password(): AbstractControl {
    return this.editForm.controls['password'];
  }
  get cpassword(): AbstractControl {
    return this.editForm.controls['cpassword'];
  }

  private pattLetters: any = /^[a-zA-Z ]*$/;
  private pattEmail: any =
    /^(([^<>()\[\]\\.,;:\s@???]+(\.[^<>()\[\]\\.,;:\s@???]+)*)|(???.+???))@((\[[0???9]{1,3}\.[0???9]{1,3}\.[0???9]{1,3}\.[0???9]{1,3}])|(([a-zA-Z\-0???9]+\.)+[a-zA-Z]{2,}))$/;
  private pattPass: any = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;
  private pattNumbers: any = /^[0-9]{7,}$/;
  private pattTel: any = /^[0-9]{10,10}$/;
  
  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private router: Router) {
    this.editForm = this.formBuilder.group({
      tel: [
        '',
        [
          Validators.required,
          Validators.pattern(this.pattTel),
          Validators.minLength(8),
        ],
      ],
      /*
      alias: [
        '',
        [
          Validators.minLength(6),
          Validators.maxLength(16),
          Validators.required,
          Validators.pattern(this.pattLetters),
        ],
      ],*/
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(this.pattPass),
          //createPasswordStrengthValidator(),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.pattEmail),
        ],
      ],
      cpassword: ['', [Validators.required]],
    });
  }
  
  ngOnInit():void {
    let variable = JSON.parse(localStorage.getItem('identity'));
    let email = variable.Email;
    console.log(email);
    this.loadCliente(email);
  }

  get aliasField() {
    return this.editForm.get('alias');
  }
  get telField() {
    return this.editForm.get('tel');
  }
  get emailField() {
    return this.editForm.get('email');
  }
  get passwordField() {
    return this.editForm.get('password');
  }
  get cpasswordField() {
    return this.editForm.get('cpassword');
  }

onSubmit(event: Event,cliente: Cliente) {
  event.preventDefault();
  if (this.editForm.valid) {
      this.clienteService.putCliente(cliente, this.emailModificar).subscribe(data  => {
      console.log(data);
      this.perfil = data;
      Swal.fire({
        icon: 'success',
        title: 'Se edit?? su perfil',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['login']);
      })
    });
  } else {
    this.editForm.markAllAsTouched();
  }
}

loadCliente(email){
    this.clienteService.getClienteById(email).subscribe(data  => {
        console.log(data)
        this.perfil = data;
        this.emailModificar = data[0].email;
    })
  }

// export function createPasswordStrengthValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const value = control.value;

//     if (!value) {
//       return null;
//     }

//     const hasUpperCase = /[A-Z]+/.test(value);

//     const hasLowerCase = /[a-z]+/.test(value);

//     const hasNumeric = /[0-9]+/.test(value);

//     const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

//     return !passwordValid ? { passwordStrength: true } : null;
//   };

}