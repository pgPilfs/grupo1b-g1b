import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl, 
  ValidationErrors, 
  ValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators 
} from '@angular/forms';
import data from './data.json';
import { Router } from '@angular/router';
import { Transacciones, TransaccionesService} from 'src/app/servicios/transacciones.service';

interface Month {
  mes: string;
}
interface Year {
  anio: string;
}
@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {
  transacciones: Transacciones = new Transacciones();
  operacionForm: FormGroup;
  form: any = {};
  //carga de movimientos SACAR ESTA PARTE
  movimientos: { id: String; cuenta: String; fecha: String; monto: String }[] = data;
  operacion: string = "Ingresar";
  
  get cardNumber(): AbstractControl {
    return this.operacionForm.controls['cardNumber'];
  }
  get fecha(): AbstractControl {
    return this.operacionForm.controls['fecha'];
  }
  get cuenta(): AbstractControl {
    return this.operacionForm.controls['cuenta'];
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
  get tipoTransaccion(): AbstractControl {
    return this.operacionForm.controls['tipoTransaccion'];
  }
  get monto(): AbstractControl {
    return this.operacionForm.controls['monto'];
  }


  private pattNumbers: any = /^[0-9]{7,}$/;
  private pattCVV: any = /^[0-9]{3,}$/;
  constructor( private formBuilder: FormBuilder, private transaccionesService: TransaccionesService,) {
    this.operacionForm = this.formBuilder.group(
      {
        cardNumber:['',[
          Validators.required,
          Validators.pattern(this.pattNumbers),
          Validators.minLength(16),
          Validators.maxLength(16),
        ]],
        fecha:['',[
          Validators.required,
        
        ]],
        cuenta:['',[
          Validators.required,
        
        ]],
        numberCVV:['',[
          Validators.required,
          Validators.pattern(this.pattCVV),
          Validators.minLength(3),
          Validators.maxLength(3),
        ]],
        month:['',[
          Validators.required
        ]],
        year:['',[
          Validators.required
        ]],
        tipoTransaccion:['',[
          Validators.required,
        ]],
        monto:['',[
          Validators.required,
          Validators.min(100),
        ]],
      });
      
  }

  months: Month[] = [
    { mes: '01' },
    { mes: '02' },
    { mes: '03' },
    { mes: '04' },
    { mes: '05' },
    { mes: '06' },
    { mes: '07' },
    { mes: '08' },
    { mes: '09' },
    { mes: '10' },
    { mes: '11' },
    { mes: '12' },
  ];
  years: Year[] = [
    { anio: '22' },
    { anio: '23' },
    { anio: '24' },
    { anio: '25' },
    { anio: '26' },
    { anio: '27' },
    { anio: '28' },
    { anio: '29' },
    { anio: '30' },
  ];  
  ngOnInit(): void{};

  onSubmit(event: Event, transacciones: Transacciones): void {
    event.preventDefault;
    console.log("funciona");
    if (this.operacionForm.valid) {
      this.transaccionesService.AgregarTransaccion(this.transacciones).subscribe((data) => {
        console.log(data);
        if(data['Id_transaccion'] > 0) {
          alert(' se registro bien gracias. vuelvas prontos');
        }
      })
      console.log(this.operacionForm.value);
    }else{
      this.operacionForm.markAllAsTouched();
    }
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

  
  
  habilitarIngreso(transacciones: Transacciones): void {
    this.operacion = "Ingresar";
    transacciones.id_tipo_transaccion = 1

}

  habilitarRetiro(event: Event, transacciones: Transacciones): void {
    this.operacion = "Retirar";
    event.preventDefault;
    if (this.operacionForm.valid) {
      this.transacciones.id_tipo_transaccion = 2;
  }
  }

  
}
