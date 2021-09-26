import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  url="https://localhost:44335/api/Transaccion/"
  url1="https://localhost:44335/api/Cuentas"
  constructor(private http:HttpClient) { }
 

  AgregarTransaccion(transacciones:Transacciones):Observable<Transacciones>{
    return this.http.post<Transacciones>(this.url, transacciones);
  }

  // getCuentas(){
  //   return this.http.get<any>(this.url+'GetCuentas'.toString());
  // }
  getCuentas(){
    return this.http.get<any>(this.url+'GetCuentas'.toString());  
  }
  
  getTipoTransacciones(){
    return this.http.get<any>(this.url+'GetTipoTransacciones'.toString());
  }
  getTransacciones(){
    return this.http.get<any>(this.url+'GetTransacciones'.toString());
  }
  

  }
 

  export class Transacciones
  {
    Id_transaccion:number=0;
    Id_tipo:number=0;
    Cuenta_id:number=0;
    Fecha_transaccion:Date;
    Monto:number=0;
    NumeroTarjeta:string="";
    NumeroCVV:number=0;

}

