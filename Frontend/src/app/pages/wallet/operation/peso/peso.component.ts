import { Component, OnInit } from '@angular/core';
import data from "./data.json";
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})


export class PesoComponent implements OnInit {
  seccionDeposito = false;
  seccionExtraccion = false;
  movimientos:{id:String,cuenta:String,fecha:String,monto:String}[] = data;
  form: any = {};
  operacionForm: FormGroup;
  constructor() {
    this.operacionForm = new FormGroup({
      numeroTarjetaD: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ,Validators.minLength(16),Validators.maxLength(16)]),
      fechaD: new FormControl('', [Validators.required]),
      montoD: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(100)]),
      numeroCVVD: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ,Validators.minLength(3),Validators.maxLength(3)]),
      numeroTarjeta: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ,Validators.minLength(16),Validators.maxLength(16)]),
      fecha: new FormControl('', [Validators.required]),
      monto: new FormControl('', [Validators.required , Validators.pattern("^[0-9]*$"), Validators.min(100)]),
      numeroCVV: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ,Validators.minLength(3),Validators.maxLength(3)]),
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
    
  }
  extraer(){
  
  }
  
  

}

