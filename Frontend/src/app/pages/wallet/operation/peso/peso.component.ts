import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  CuentaLista: any[];
  TipoTransaccionesLista: any[];
  
  get cardNumber(): AbstractControl {
    return this.operacionForm.controls['cardNumber'];
  }
  get fecha(): AbstractControl {
    return this.operacionForm.controls['fecha'];
  }
  get id_cuenta(): AbstractControl {
    return this.operacionForm.controls['id_cuenta'];
  }
  get numberCVV(): AbstractControl {
    return this.operacionForm.controls['numberCVV'];
  }
  get id_tipo_transaccion(): AbstractControl {
    return this.operacionForm.controls['id_tipo_transaccion'];
  }
  get monto(): AbstractControl {
    return this.operacionForm.controls['monto'];
  }


  private pattNumbers: any = /^[0-9]{7,}$/;
  private pattCVV: any = /^[0-9]{3,}$/;
  constructor( private formBuilder: FormBuilder, private transaccionesService: TransaccionesService,private cdref: ChangeDetectorRef) {
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
        numberCVV:['',[
          Validators.required,
          Validators.pattern(this.pattCVV),
          Validators.minLength(3),
          Validators.maxLength(3),
        ]],
        monto:['',[
          Validators.required,
          Validators.min(100),
        ]],
      });
      
  }

  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }

  ngOnInit(){
    this.loadCuenta();
    this.loadTipoTransacciones();
  };
  loadCuenta(){
    this.transaccionesService.getCuentas().subscribe(data  => {
      console.log(data);
      this.CuentaLista = data;
      
  });
}
loadTipoTransacciones(){
  this.transaccionesService.getTipoTransacciones().subscribe(data  => {
    console.log(data);
    this.TipoTransaccionesLista = data;
    
});
}

  onEnviar(event: Event, transacciones:Transacciones): void {
    event.preventDefault;
    console.log("funcionaaaaaa");
    if (this.operacionForm.valid) {
      this.transaccionesService.AgregarTransaccion(transacciones).subscribe(
        data => {
        console.log(data);
        if(data['Id_transaccion'] < 0) {
          alert(' se registro bien gracias. vuelvas prontos');
        }
      })
      console.log(this.operacionForm.value);
    }else{
      this.operacionForm.markAllAsTouched();
    }
  }
  
  get id_tipo_transaccionField(){
    return this.operacionForm.get('id_tipo_transaccion');
  }
  get fechaField(){
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
  get id_cuentaField(){
    return this.operacionForm.get('id_cuenta');
  }

  
  
  habilitarIngreso() {  
}

  habilitarRetiro(){
   }

}
