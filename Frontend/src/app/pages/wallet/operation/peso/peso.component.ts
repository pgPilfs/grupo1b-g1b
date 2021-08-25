import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
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
  operacionForm: FormGroup;

  
  movimientos: { id: String; cuenta: String; fecha: String; monto: String }[] =
    data;

  constructor() {
    this.operacionForm = new FormGroup({
      numeroTarjetaD: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      fechaD: new FormControl('', [Validators.required]),
      montoD: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.min(100),
      ]),
      numeroCVVD: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),

      numeroTarjeta: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      fecha: new FormControl('', [Validators.required]),
      monto: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.min(100),
      ]),
      numeroCVV: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
    });
  }

  ngOnInit(): void {}

  habilitarIngreso(): void {
    this.seccionIngreso = true;
    this.seccionRetiro = false;
  }

  habilitarRetiro(): void {
    this.seccionRetiro = true;
    this.seccionIngreso = false;
  }

  ingresar() {}
  retiro() {}
}
