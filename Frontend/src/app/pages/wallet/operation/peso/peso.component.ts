import { Component, OnInit } from '@angular/core';
import data from "./data.json";
@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {

  movimientos:{id:String,cuenta:String,fecha:String,monto:String}[] = data;
  
  constructor() { }

  ngOnInit(): void {
  }

}
