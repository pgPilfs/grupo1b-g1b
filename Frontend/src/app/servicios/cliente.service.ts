import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // url="https://localhost:44359/api/cliente"

  constructor(private http:HttpClient) { }

  RegistrarCliente(){
    return this.http.post<Cliente>("https://localhost:44359/api/cliente", Cliente);
  }
}

export class Cliente
{
  id_cliente:number=0;
  nombre:string="";
  apellido:string="";
  fecnac:string="";
  domicilio:string="";
  pisodpto:string="";
  telefono:number=0;
  cpostal:number=0;
  cuil:number=0;
  ciudad:number=0;
  provincia:number=0;
  cuenta_id:number=0;
  foto_dni_frente:string="";
  foto_dni_reversa:string="";
}
