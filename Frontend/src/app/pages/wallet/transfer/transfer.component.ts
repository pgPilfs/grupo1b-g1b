import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})



export class TransferComponent implements OnInit {
  
  operacionTransfer: FormGroup;

  get cuentaD(): AbstractControl {
    return this.operacionTransfer.controls['cuentaD'];
  }

  get cuentaO(): AbstractControl {
    return this.operacionTransfer.controls['cuentaO'];
  }
  
  get concepPago(): AbstractControl {
    return this.operacionTransfer.controls['concepPago'];
  }
  
  get monto(): AbstractControl {
    return this.operacionTransfer.controls['monto'];
  }
  
  constructor(private formBuilder: FormBuilder) { 
    this.operacionTransfer = this.formBuilder.group({
      cuentaD: ['', [Validators.required]],
      cuentaO: ['', [Validators.required]],
      concepPago: ['', [Validators.required]],
      monto: ['', [Validators.required]],
    })


  }

  ngOnInit(): void {
  }

  get cuentaDField() {
    return this.operacionTransfer.get('cuentaD');
  }
  
  get cuentaOField() {
    return this.operacionTransfer.get('cuentaO');
  }
  
  get concepPagoField() {
    return this.operacionTransfer.get('concepPago');
  }
  
  get montoField() {
    return this.operacionTransfer.get('monto');
  }

  onSubmitTransfer(event: Event) {
    event.preventDefault(); 
    if (this.operacionTransfer.valid) {
      console.log(this.operacionTransfer.value); 
      alert("Transferencia exitosa!")
    } else {
      this.operacionTransfer.markAllAsTouched(); 
      alert("Transferencia fallida!")
    }
  }

}
