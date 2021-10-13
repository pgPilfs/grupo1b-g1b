import {Component, ChangeDetectorRef, OnInit} from '@angular/core';
import { Cliente, ClienteService } from 'src/app/servicios/cliente.service';
import { Transacciones, TransaccionesService } from 'src/app/servicios/transacciones.service';
export interface Movimiento {
  cuenta: string;
  tipo_de_transaccion: string;
  fecha: string;
  numero_de_tarjeta: string;
  numero_cvv: string;
  monto: string;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})


export class WalletComponent implements OnInit {
  transacciones: Transacciones = new Transacciones();
  displayedColumns: string[] = ['cuenta','tipo_de_transaccion', 'fecha','numero_de_tarjeta', 'monto'];
  clickedRows = new Set<Movimiento>();
  displayedColumns2: string[] = ['cotizacion', 'monto'];
  CuentaLista: any[];
  TipoTransaccionesLista: any[];
  TransaccionesLista: any[];
  ClienteLista: any[];
  ClienteLista1: any[];
  cliente: Cliente = new Cliente();
  

  constructor( private transaccionesService: TransaccionesService, private cdref: ChangeDetectorRef, private clienteService: ClienteService) {}
  ngOnInit(): void {
    
    this.loadTipoTransacciones();
    let variable = JSON.parse(localStorage.getItem('identity'));
    let email = variable.Email;
  //  console.log(email);
    this.loadTransacciones(email);
    this.loadCuenta(email);
    this.loadClienteId(email);
    //this.loadCliente();
  };

  loadCuenta(email) {
    this.transaccionesService.getCuentas(email).subscribe(data => {
     // console.log(data)
      this.CuentaLista = data;
    });
  }

  loadTipoTransacciones() {
    this.transaccionesService.getTipoTransacciones().subscribe(data => {
     // console.log(data);
      this.TipoTransaccionesLista = data;

    });
  }
  loadTransacciones(email) {
    this.transaccionesService.getTransacciones(email).subscribe(data => {
    //  console.log(data)
      this.TransaccionesLista = data;

    });
  }
  // loadCliente() {
  //   this.clienteService.getClienteList().subscribe(data => {
  //     console.log(data)
  //     this.ClienteLista1 = data;

  //   });
  //}
  loadClienteId(email){
    this.clienteService.getClienteById(email).subscribe(data => {
     // console.log(this.cliente.id_cliente);
     // console.log(data);
      this.ClienteLista = data;
      })
  }
  // cargarTransacciones() {
  //   this.loadTransacciones(email);
  // }

  ngAfterContentChecked(): void {

    this.cdref.detectChanges();

  }
}