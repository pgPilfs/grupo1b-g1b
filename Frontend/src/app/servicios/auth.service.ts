import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators';


export class Cliente
{
  email:string="";
  password:string="";
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="https://localhost:44335/api/login/authenticate";
  private currentClientSubject: BehaviorSubject<Cliente>;
  public currentClient: Observable<Cliente>;
  
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.currentClientSubject = new BehaviorSubject<Cliente>(JSON.parse(localStorage.getItem('currentClient') || '{}'));
    this.currentClient = this.currentClientSubject.asObservable();
   }

   public get currentClientValue(): Cliente {
    return this.currentClientSubject.value;
  }
  login(email: string, password: string): Observable<any> {
    

    return this.http.post<any>(this.url, { email, password })
      .pipe(map(client => {
        localStorage.setItem('currentClient', JSON.stringify(client));
        this.currentClientSubject.next(client);
        console.log(client);
        
        return client;
      }));
    }

  // singin(data):Observable<any>{
  //   console.log("I am server");
  //   return this.http.post(`${baseUrl}login/authenticate`, data);
  // }
  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
