import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  url="https://localhost:44335/api/Transaccion/"
  url1="https://localhost:44335/api/Cuentas"
  url_email1="https://localhost:44335/api/Transaccion/GetTransacciones?email="
  url_email2="https://localhost:44335/api/Transaccion/GetCuentas?email="
  constructor(private http:HttpClient) { }
 
  AgregarTransaccion(transacciones:Transacciones):Observable<Transacciones>{
    return this.http.post<Transacciones>(this.url, transacciones);
  }

  // getCuentas(){
  //   return this.http.get<any>(this.url+'GetCuentas'.toString());
  // }
  getCuentas(email: String){
    return this.http.get<any>(this.url_email2+email);  
  }
  getCuentasCvu(){
    return this.http.get<any>(this.url+'GetCuentasCvu'.toString());
  }
  
  getTipoTransacciones(){
    return this.http.get<any>(this.url+'GetTipoTransacciones'.toString());
  }
  getTransacciones(email: String){
    return this.http.get<any>(this.url_email1+email);
  }

  }
  export class Transacciones
  {
    Id_transaccion:number=0;
    Id_tipo:number=0;
    Cuenta_id:number=0;
    Fecha_transaccion:Date;
    Monto:number;
    NumeroTarjeta:string="";
    NumeroCVV:number;
    Cvu:number=0;
 }

