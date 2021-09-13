import { animateChild } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatMenuTrigger } from '@angular/material/menu';
import { AbstractControl } from '@angular/forms';
import { 
  FormBuilder,
  FormGroup,
  FormControl,
  Validators 
} from '@angular/forms';

import data from './data.json';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css'],
})
export class PesoComponent implements OnInit {

  seccionIngreso = false;
  seccionRetiro = false;

  form: any = {};
  //carga de movimientos SACAR ESTA PARTE
  movimientos: { id: String; cuenta: String; fecha: String; monto: String }[] = data;

  operacionForm: FormGroup;

  get cardNumberD(): AbstractControl {
    return this.operacionForm.controls['cardNumberD'];
  }
  get numberCVVD(): AbstractControl {
    return this.operacionForm.controls['numberCVVD'];
  }
  get dateD(): AbstractControl {
    return this.operacionForm.controls['dateD'];
  }
  get montoD(): AbstractControl {
    return this.operacionForm.controls['montoD'];
  }
  get cardNumber(): AbstractControl {
    return this.operacionForm.controls['cardNumber'];
  }
  get numberCVV(): AbstractControl {
    return this.operacionForm.controls['numberCVV'];
  }
  get date(): AbstractControl {
    return this.operacionForm.controls['date'];
  }
  get monto(): AbstractControl {
    return this.operacionForm.controls['monto'];
  }


  private pattNumbers: any = /^[0-9]{7,}$/;

  constructor( private formBuilder: FormBuilder ) {
    this.operacionForm = this.formBuilder.group(
      {
        cardNumberD:['',[
          Validators.required,
          Validators.pattern(this.pattNumbers),
          Validators.minLength(16),
          Validators.maxLength(16),
        ]],
        numberCVVD:['',[
          Validators.required,
          Validators.pattern(this.pattNumbers),
          Validators.minLength(3),
          Validators.maxLength(3),
        ]],
        dateD:['',[
          Validators.required
        ]],
        montoD:['',[
          Validators.min(100),
        ]],
      });
      

    this.operacionForm = this.formBuilder.group(
      {
        cardNumber:['',[
          Validators.required,
          Validators.pattern(this.pattNumbers),
          Validators.minLength(16),
          Validators.maxLength(16),
        ]],
        numberCVV:['',[
          Validators.required,
          Validators.pattern(this.pattNumbers),
          Validators.minLength(3),
          Validators.maxLength(3),
        ]],
        date:['',[
          Validators.required
        ]],
        monto:['',[
          Validators.min(100),
        ]],
      });
      
  }

  ngOnInit(): void{};

  onSubmitIngreso(event: Event) {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.operacionForm.valid) {
      console.log(this.operacionForm.value);
    } else {
      this.operacionForm.markAllAsTouched(); //Activa todas las validaciones
    }
  }
  onSubmitRetiro(event: Event) {
    event.preventDefault(); //Cancela la funcionalidad por default.
    if (this.operacionForm.valid) {
      console.log(this.operacionForm.value);
    } else {
      this.operacionForm.markAllAsTouched(); //Activa todas las validaciones
    }
  }
  confirmado(){
    console.log("confirmado");
  }
  
  
  get cardNumberDField() {
    return this.operacionForm.get('cardNumberD');
  }
  get numberCVVDField() {
    return this.operacionForm.get('numberCVVD');
  }
  get dateDField() {
    return this.operacionForm.get('dateD');
  }
  get montoDField() {
    return this.operacionForm.get('montoD');
  }


  get cardNumberField() {
    return this.operacionForm.get('cardNumber');
  }
  get numberCVVField() {
    return this.operacionForm.get('numberCVV');
  }
  get dateField() {
    return this.operacionForm.get('date');
  }
  get montoField() {
    return this.operacionForm.get('monto');
  }

  
  habilitarIngreso(): void {
    this.seccionIngreso = true;
    this.seccionRetiro = false;
  }

  habilitarRetiro(): void {
    this.seccionRetiro = true;
    this.seccionIngreso = false;
  }

  
}