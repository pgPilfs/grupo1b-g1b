import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  url="https://localhost:44335/api/Transaccion/"
  url1="https://localhost:44335/api/Cuentas/"
  constructor(private http:HttpClient) { }
 

  AgregarTransaccion(transacciones:Transacciones):Observable<Transacciones>{
    return this.http.post<Transacciones>(this.url, transacciones);
  }

  getCuentas(){
    return this.http.get<any>(this.url+'GetCuentas'.toString());
  }
  getTipoTransacciones(){
    return this.http.get<any>(this.url+'GetTipoTransacciones'.toString());
  }
  

  }
 

  export class Transacciones
  {
    id_transaccion:number=0;
    id_tipo_transaccion:number=0;
    id_cuenta:number=0;
    fecha_transaccion:string="";
    monto:number=0;
    numeroTarjeta:number=0;
    numeroCVV:number=0;

}

