import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  

  constructor(private http:HttpClient) { }
  url="https://localhost:44359/api/cliente"

  RegistrarCliente(usuario:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, Cliente);
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
  email:string="";
  foto_dni_frente:string="";
  foto_dni_reversa:string="";
  password:string="";



}
