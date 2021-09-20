import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  constructor(private http:HttpClient) { }
  url="https://localhost:44335/api/Transaccion/"

  AgregarTransaccion(transacciones:Transacciones):Observable<Transacciones>{
    return this.http.post<Transacciones>(this.url, transacciones);
  }

  
  }
  export class Transacciones{
    id_transaccion:number=0;
    id_tipo_transaccion:number=0;
    id_cuenta:number=0;
    fecha_transaccion:string="";
    monto:number=0;
    numeroTarjeta:number=0;
    numeroCVV:number=0;

}

