import {Component, ChangeDetectorRef, OnInit} from '@angular/core';
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

  constructor( private transaccionesService: TransaccionesService, private cdref: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.loadCuenta();
    this.loadTipoTransacciones();
    this.loadTransacciones();
  };

  loadCuenta() {
    this.transaccionesService.getCuentas().subscribe(data => {
      console.log(data)
      this.CuentaLista = data;

    });
  }

  loadTipoTransacciones() {
    this.transaccionesService.getTipoTransacciones().subscribe(data => {
      console.log(data);
      this.TipoTransaccionesLista = data;

    });
  }
  loadTransacciones() {
    this.transaccionesService.getTransacciones().subscribe(data => {
      console.log(data)
      this.TransaccionesLista = data;

    });
  }
  cargarTransacciones() {
    this.loadTransacciones();
  }

  ngAfterContentChecked(): void {

    this.cdref.detectChanges();

  }
}
