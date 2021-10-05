import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Login } from './cliente.service';


const TOKEN_KEY = 'auth-token';


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
  loggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    console.log('AUTH SERVICE WORKING');
    this.currentClientSubject = new BehaviorSubject<Cliente>(
      JSON.parse(localStorage.getItem('currentClient') || '{}')
    );
    this.currentClient = this.currentClientSubject.asObservable();
   }

   public get currentClientValue(): Cliente {
    return this.currentClientSubject.value;
  }

  login(cliente: Login): Observable<any> {
    return this.http.post<Login>(this.url, cliente).pipe(
      map((data) => {
        localStorage.setItem(TOKEN_KEY, data.Token);

        this.currentClientSubject.next(data);
        this.loggedIn.next(true);
        return data;
      })
    );
  }
  
  get clienteAutenticado(): Login {
    return this.currentClientSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logOut(): void {
    window.sessionStorage.clear();
    localStorage.removeItem(TOKEN_KEY);
    this.loggedIn.next(false);
  }

  // login(email: string, password: string): Observable<any> {
    

  //   return this.http.post<any>(this.url, { email, password })
  //     .pipe(map(client => {
  //       localStorage.setItem('currentClient', JSON.stringify(client));
  //       this.currentClientSubject.next(client);
  //       console.log(client);
        
  //       return client;
  //     }));
  //   }

  // singin(data):Observable<any>{
  //   console.log("I am server");
  //   return this.http.post(`${baseUrl}login/authenticate`, data);
  // }
  // isAuth():boolean{
  //   const token = localStorage.getItem('token');
  //   if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
  //     return false;
  //   }
  //   return true;
  // }
}
