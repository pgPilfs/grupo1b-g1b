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
  styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {

  operacionForm: FormGroup;
  form: any = {};
  //carga de movimientos SACAR ESTA PARTE
  movimientos: { id: String; cuenta: String; fecha: String; monto: String }[] = data;
  operacion: string = "Ingresar";
  
  get cardNumber(): AbstractControl {
    return this.operacionForm.controls['cardNumber'];
  }
  get numberCVV(): AbstractControl {
    return this.operacionForm.controls['numberCVV'];
  }
  get month(): AbstractControl {
    return this.operacionForm.controls['month'];
  }
  get year(): AbstractControl {
    return this.operacionForm.controls['year'];
  }
  get monto(): AbstractControl {
    return this.operacionForm.controls['monto'];
  }


  private pattNumbers: any = /^[0-9]{7,}$/;

  constructor( private formBuilder: FormBuilder ) {
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
        month:['',[
          Validators.required
        ]],
        year:['',[
          Validators.required
        ]],
        monto:['',[
          Validators.required,
          Validators.min(100),
        ]],
      });
      
  }

  ngOnInit(): void{};

  onSubmit() {
    console.log("funciona");
    if (this.operacionForm.valid) {
      console.log(this.operacionForm.value);
    }
  }
  
  print(){
    console.log(this.cardNumber);
  }
  
  get cardNumberField() {
    return this.operacionForm.get('cardNumber');
  }
  get numberCVVField() {
    return this.operacionForm.get('numberCVV');
  }
  get monthField() {
    return this.operacionForm.get('month');
  }
  get yearField() {
    return this.operacionForm.get('year');
  }
  get montoField() {
    return this.operacionForm.get('monto');
  }

  
  habilitarIngreso(): void {
    this.operacion = "Ingresar";
  }

  habilitarRetiro(): void {
    this.operacion = "Retirar";
  }

  
}