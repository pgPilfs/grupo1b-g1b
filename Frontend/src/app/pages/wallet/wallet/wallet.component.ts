import {Component, OnInit} from '@angular/core';

export interface Movimiento {
  cuenta: string;
  fecha: string;
  movimiento: string;
  ingreso: string;
}

export interface Cotizacion {
  cotizacion: string;
  monto: string;
}

const ELEMENT_DATA: Movimiento[] = [
  {cuenta: "Starbucks", fecha: '19/08/2021 13:00', movimiento: "$400", ingreso: '⬆️'},
  {cuenta: "Disco", fecha:'19/08/2021 08:47' , movimiento: "$600", ingreso: '⬇️'},
  {cuenta: "Alejandra", fecha: '18/08/2021 06:09', movimiento: "$90", ingreso: '⬆️'},
  {cuenta: "Fabricio", fecha: '17/08/2021 16:00', movimiento: "$700", ingreso: '⬇️'},
  {cuenta: "Farmacity", fecha: '17/08/2021 04:45', movimiento: "$60", ingreso: '⬇️'},
];

const ELEMENT_DATA2: Cotizacion[] = [
  {cotizacion:"Dolar", monto: "U$S 130"}
]

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})


export class WalletComponent implements OnInit {
  displayedColumns: string[] = ['cuenta', 'fecha', 'movimiento', 'ingreso'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<Movimiento>();
  displayedColumns2: string[] = ['cotizacion', 'monto'];
  dataSource2 = ELEMENT_DATA2;
  clickedRows2 = new Set<Cotizacion>();

 
  constructor() {}
  ngOnInit(): void {
  }
}
