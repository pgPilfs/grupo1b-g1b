import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  EmailValidator
} from '@angular/forms';

import { Transacciones, TransaccionesService } from 'src/app/servicios/transacciones.service';
import Swal from 'sweetalert2';
export interface Movimiento {
  cuenta: string;
  tipo_de_transaccion: string;
  fecha: string;
  numero_de_tarjeta: string;
  numero_cvv: string;
  monto: string;
}


@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {


  displayedColumns: string[] = ['cuenta','tipo_de_transaccion', 'fecha','numero_de_tarjeta', 'monto'];
  clickedRows = new Set<Movimiento>();

  transacciones: Transacciones = new Transacciones();
  operacionForm: FormGroup;
  form: any = {};

  operacion: string = "Ingresar";
  
  CuentaLista: any[];
  CuentaListaCvu: any[];
  TipoTransaccionesLista: any[];
  TransaccionesLista: any[];
  email: String;

  get cardNumber(): AbstractControl {
    return this.operacionForm.controls['cardNumber'];
  }
  get fecha(): AbstractControl {
    return this.operacionForm.controls['fecha'];
  }
  get cvu(): AbstractControl {
    return this.operacionForm.controls['cvu'];
  }
  get numberCVV(): AbstractControl {
    return this.operacionForm.controls['numberCVV'];
  }
  get descripcion(): AbstractControl {
    return this.operacionForm.controls['descripcion'];
  }
  get monto(): AbstractControl {
    return this.operacionForm.controls['monto'];
  }
  get cvu1(): AbstractControl {
    return this.operacionForm.controls['cvu1'];
  }
  private pattNumbers: any = /^[0-9]{7,}$/;
  private pattCVV: any = /^[0-9]{3,}$/;
  constructor(private formBuilder: FormBuilder, private transaccionesService: TransaccionesService, private cdref: ChangeDetectorRef) {
    this.operacionForm = this.formBuilder.group(
      {
        cvu: ['', [
          Validators.required,

        ]],
        descripcion: ['', [
          Validators.required,

        ]],
        cardNumber: ['', [
          Validators.required,
          Validators.pattern(this.pattNumbers),
          Validators.minLength(16),
          Validators.maxLength(16),
        ]],
        numberCVV: ['', [
          Validators.required,
          Validators.pattern(this.pattCVV),
          Validators.minLength(3),
          Validators.maxLength(3),
        ]],
        monto: ['', [
          Validators.required,
          Validators.min(100),
        ]],
      });

  }
  ngAfterContentChecked(): void {

    this.cdref.detectChanges();

  }

  ngOnInit(): void {
    
    this.loadTipoTransacciones();
  
    let variable = JSON.parse(localStorage.getItem('identity'));
    this.email = variable.Email;
    console.log(this.email);
    this.loadTransacciones(this.email);
    this.loadCuenta(this.email);
    this.loadCuentaCvu();
    
  };

  loadCuenta(email) {
    this.transaccionesService.getCuentas(email).subscribe(data => {
      console.log(data)
      this.CuentaLista = data;
    });
  }
  
  loadCuentaCvu() {
    this.transaccionesService.getCuentasCvu().subscribe(data => {
      console.log(data)
      this.CuentaListaCvu = data;
    });
  }

  loadTipoTransacciones() {
    this.transaccionesService.getTipoTransacciones().subscribe(data => {
      console.log(data);
      this.TipoTransaccionesLista = data;

    });
  }
  loadTransacciones(email) {
    this.transaccionesService.getTransacciones(email).subscribe(data => {
      console.log(data)
      this.TransaccionesLista = data;

    });
  }
  cargarTransacciones() {
    this.loadTransacciones(this.email);
  }
  onEnviar(event: Event, transacciones: Transacciones): void {
    event.preventDefault;
    console.log("funcionaaaaaa");
    if (this.operacionForm.valid) {
      this.transaccionesService.AgregarTransaccion(transacciones).subscribe(
        data => {
          if (data['id_transaccion'] != 0) {
            Swal.fire(
              'Transacción hecha',
              'Tu transacción se ha realizado exitosamente 🎉',
              'success'
            )
          }
         this.loadTransacciones(this.email);
          console.log(data);
        })
      console.log(this.operacionForm.value);
    } else {
      this.operacionForm.markAllAsTouched();
    }
  }

  get descripcionField() {
    return this.operacionForm.get('descripcion');
  }
  get fechaField() {
    return this.operacionForm.get('fecha');
  }

  get cardNumberField() {
    return this.operacionForm.get('cardNumber');
  }
  get numberCVVField() {
    return this.operacionForm.get('numberCVV');
  }
  get montoField() {
    return this.operacionForm.get('monto');
  }
  get cvuField() {
    return this.operacionForm.get('cvu');
  }
  get cvu1Field() {
    return this.operacionForm.get('cvu1');
  }

}