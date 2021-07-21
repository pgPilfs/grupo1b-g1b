import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Cuenta } from 'src/app/models/cuenta.model';
import { Deposito } from 'src/app/models/deposito.model';
import { Extraccion } from 'src/app/models/extraccion.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})


export class PesoComponent implements OnInit {
  seccionDeposito = false;
  seccionExtraccion = false;
  
  cuentasDelCliente: Cuenta[] = [];
  cuentaDestino: Cliente[] = [];
  form: any = {};
  fechaD: Date | undefined;

  operacionForm: FormGroup;


  constructor() {
    this.operacionForm = new FormGroup({
      numeroTarjetaD: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ,Validators.minLength(16),Validators.maxLength(16)]),
      fechaD: new FormControl('', [Validators.required]),
      montoD: new FormControl('', [Validators.required]),


      numeroTarjeta: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      monto: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }


  habilitarDeposito(): void {
    this.seccionDeposito = true;
    this.seccionExtraccion = false;
  }

  habilitarExtraccion(): void {
    this.seccionExtraccion = true;
    this.seccionDeposito = false;
  }

  depositar(){
    if (this.form.cuenta != undefined && this.form.monto != undefined) {
      let deposito = new Deposito();
      deposito.id_cuenta_virtual = this.form.cuenta.Id;
      deposito.monto = this.form.monto;
    }
  }
  extraer(){
    if (this.form.cuenta != undefined && this.form.monto != undefined) {
      let extraccion = new Extraccion();
      extraccion.id_cuenta_virtual = this.form.cuenta.Id;
      extraccion.monto = this.form.monto;

    }
  }
  
  

}

