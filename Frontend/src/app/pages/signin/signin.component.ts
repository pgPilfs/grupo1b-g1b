import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})

export class SigninComponent implements OnInit {

  step: any = 1;

  formsign: FormGroup;

  minDate: Date;
  maxDate: Date;

  private pattLetters: any = /^[a-zA-Z ]*$/;
  private pattUser: any = /^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{5,}$/;
  private pattEmail: any = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  private pattPass: any = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;
  private pattNumbers: any = /^[0-9]{7,}$/;
  private pattTel: any = /^[0-9]{10,10}$/;
  private pattAddress: any = /^[A-Za-z0-9\s]{5,50}$/;

  constructor( private formBuilder: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 90, 0, 1);
    this.maxDate = new Date(currentYear + -18, 7, 31);

    this.formsign = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8),  Validators.maxLength(16), Validators.pattern(this.pattPass), createPasswordStrengthValidator()]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.pattEmail)]],
      name: ['', [Validators.required, Validators.pattern(this.pattLetters)]],
      lastname: ['', [Validators.required, Validators.pattern(this.pattLetters)]],
      username: ['', [Validators.required, Validators.pattern(this.pattUser)]],
      cpassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.pattPass),createPasswordStrengthValidator()]],
      pais: ['', [Validators.required, ]],
      cpostal: ['',[Validators.required, Validators.pattern(this.pattAddress)]],
      provincia: ['',[Validators.required]],
      ciudad: ['', [Validators.required,]],
      calle: ['', [Validators.required, Validators.pattern(this.pattAddress)]],
      pdpto: ['', [Validators.required, Validators.pattern(this.pattAddress)]],
      dni: ['', [Validators.required, Validators.pattern(this.pattNumbers)]],
      cuil: ['', [Validators.required, Validators.pattern(this.pattNumbers)]],
      tel: ['', [Validators.required, Validators.pattern(this.pattTel), Validators.minLength(8)]],
      fecnac: ['', [Validators.required]],
      foto1: ['', [Validators.required,]],
      foto2: ['', [Validators.required]]
    });
  }

  ngOnInit(): void{
  }

  constructor() { }

  ngOnInit() {
  }

  get lastnameField() {
    return this.formsign.get("lastname");
  }
  get usernameField() {
    return this.formsign.get("username");
  }
  get emailField() {
    return this.formsign.get("email");
  }
  get passwordField() {
    return this.formsign.get("password");
  }
  get cpasswordField() {
    return this.formsign.get("cpassword");
  }
  get paisField(){
    return this.formsign.get("pais");
  }
  get cpostalField(){
    return this.formsign.get("cpostal");
  }
  get provinciaField(){
    return this.formsign.get("provincia");
  }
  get ciudadField(){
    return this.formsign.get("ciudad");
  }
  get calleField(){
    return this.formsign.get("calle");
  }
  get pdptoField(){
    return this.formsign.get("pdpto");
  }
  get dniField(){
    return this.formsign.get("dni");
  }
  get cuilField(){
    return this.formsign.get("cuil");
  }
  get telField(){
    return this.formsign.get("tel");
  }
  get fecnacField(){
    return this.formsign.get("fecnac");
  }
  get foto1Field(){
    return this.formsign.get("foto1");
  }
  get foto2Field(){
    return this.formsign.get("foto2");
  }

  onSiguiente(event: Event) {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.formsign.valid) {
      console.log(this.formsign.value); //se puede enviar al servidor...
    } else {
      this.formsign.markAllAsTouched(); //Activa todas las validaciones
    }
  }
}
export function createPasswordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

       const value = control.value;

       if (!value) {
          return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

       const hasNumeric = /[0-9]+/.test(value);

       const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? {passwordStrength:true}: null;
   }
 }
