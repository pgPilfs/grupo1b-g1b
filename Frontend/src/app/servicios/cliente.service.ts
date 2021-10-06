import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly APIUrl="https:localhost:44335/api";
  readonly DniUrl="https:localhost:44335/Dni";
  url="https://localhost:44335/api/cliente/";

  constructor(private http: HttpClient) { }
  
  getClienteList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/cliente');
  }

  getClienteById(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url+id);
  }

  onAddCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente);
  }
  
  updateCliente(val:any){
    return this.http.put(this.APIUrl+'/cliente', val);
  }

  deleteCliente(val:any){
    return this.http.delete(this.APIUrl+'/cliente/'+val);
  }

  UploadDni(val:any){
    return this.http.post(this.APIUrl+'/cliente/SaveFile',val);
  }

  getProvincias(){
    return this.http.get<any>(this.url+'GetProvincias'.toString());
  }
  getCiudades(){
    return this.http.get<any>(this.url+'GetCiudades'.toString());
  }

}

 export class Cliente
 {
  id_cliente:number;
  nombre:string="";
  apellido:string="";
  fecnac:string="";
  domicilio:string="";
  pisodpto:string="";
  telefono:string="";
  cpostal:string="";
  cuil:string="";
  nombre_ciudad:string="";
  nombre_provincia:string="";
  email:string="";
  foto_dni_frente:string="";
  foto_dni_reversa:string="";
  password:string="";
 }
 export class Cuenta
 {
  id_cuenta:number=0;
  alias:string="";
  cvu:string="";
  cliente_id:number=0;
  estado:number=0;
 }
 export class  Login {
  email:string="";
  password:string="";
  Token?: string;
}


