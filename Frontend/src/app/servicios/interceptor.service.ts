import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest ,HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor{

  constructor( private authservice: AuthService) { 
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authservice.clienteAutenticado.Token;
    console.log("INTERCEPTOR WORKING");
    
    if(token) {
      req = req.clone({
        setHeaders:{
          'Authorization':  `Bearer ${token}`
        }
      });
    }
    console.log('headers:', req.headers);
    return next.handle(req);
  }

}