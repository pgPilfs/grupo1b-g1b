import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      console.log("INTERCEPTOR ERROR WORKING" + err);
      if (err.status === 401) {
        alert("ERROR: Usted no tiene autorización");
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
