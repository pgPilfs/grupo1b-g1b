import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
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

  private pattLetters: any = /^[a-zA-Z ]*$/;
  private pattUser: any = /^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{5,}$/;
  private pattEmail: any = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  private pattPass: any = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;
  private pattNumbers: any = /^[0-9]{7,}$/;
  private pattTel: any = /^[0-9]{10,10}$/;
  private pattAddress: any = /^[A-Za-z0-9\s]{5,50}$/;

  constructor( private formBuilder: FormBuilder) {
    this.formsign = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.pattPass)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.pattEmail)]],
      name: ['', [Validators.required, Validators.pattern(this.pattLetters)]],
      lastname: ['', [Validators.required, Validators.pattern(this.pattLetters)]],
      username: ['', [Validators.required, Validators.pattern(this.pattUser)]],
      cpassword: ['', [Validators.required, Validators.minLength(8),  Validators.pattern(this.pattPass)]],
      pais: ['', [Validators.required, ]],
      cpostal: ['',[Validators.required, Validators.pattern(this.pattAddress)]],
      provincia: ['',[Validators.required]],
      ciudad: ['', [Validators.required,]],
      calle: ['', [Validators.required, Validators.pattern(this.pattAddress)]],
      pdpto: ['', [Validators.required, Validators.pattern(this.pattAddress)]],
      dni: ['', [Validators.required, Validators.pattern(this.pattNumbers)]],
      cuil: ['', [Validators.required, Validators.pattern(this.pattNumbers)]],
      tel: ['', [Validators.required, Validators.pattern(this.pattTel), Validators.minLength(8)]],
      fecnac: ['', [Validators.required, Validators.pattern("^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\d{2}|[2-9]\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\d{2}|[2-9]\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\d{2}|[2-9]\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$")]],
      foto1: ['', [Validators.required,]],
      foto2: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  next() {
    this.step = this.step + 1;
  }
  anterior() {
    this.step = this.step - 1;
  }
  confirmado() {
    this.step = 4;
  }

  get nameField() {
    return this.formsign.get("name");
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

  // get nameInvalid() {
  //   return this.nameField.touched && !this.nameField.valid;
  // }

  // get lastnameInvalid() {
  //   return this.lastnameField.touched && !this.lastnameField.valid;
  // }

  // get usernameInvalid() {
  //   return this.usernameField.touched && !this.usernameField.valid;
  // }

  // get emailInvalid() {
  //   return this.usernameField.touched && !this.usernameField.valid;
  // }

  // get passwordInvalid() {
  //   return this.passwordField.touched && !this.passwordField.valid;
  // }

  // get cpasswordInvalid() {
  //   return this.cpasswordField.touched && !this.cpasswordField.valid;
  // }
  // get paisInvalid(){
  //   return this.paisField.touched && !this.paisField.valid;
  // }
  // get cpostalInvalid(){
  //   return this.cpostalField.touched && !this.cpostalField.valid;
  // }
  // get provinciaInvalid(){
  //   return this.provinciaField.touched && !this.provinciaField.valid;
  // }
  // get ciudadInvalid() {
  //   return this.ciudadField.touched && !this.ciudadField.valid;
  // }
  // get calleInvalid() {
  //   return this.calleField.touched && !this.calleField.valid;
  // }
  // get pdptoInvalid() {
  //   return this.pdptoField.touched && !this.pdptoField.valid;
  // }
  // get dniInvalid() {
  //   return this.dniField.touched && !this.dniField.valid;
  // }
  // get cuilInvalid() {
  //   return this.cuilField.touched && !this.cuilField.valid;
  // }
  // get telInvalid() {
  //   return this.telField.touched && !this.telField.valid;
  // }
  // get fecnacInvalid() {
  //   return this.fecnacField.touched && !this.fecnacField.valid;
  // }
  // get foto1Invalid() {
  //   return this.foto1Field.touched && !this.foto1Field.valid;
  // }
  // get foto2Invalid() {
  //   return this.foto2Field.touched && !this.foto2Field.valid;
  // }


  onSiguiente(event: Event) {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.formsign.valid) {
      console.log(this.formsign.value); //se puede enviar al servidor...
    } else {
      this.formsign.markAllAsTouched(); //Activa todas las validaciones
    }
  }
}
