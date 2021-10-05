import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log('GUARDS WORKING');
    return this.authservice.estaAutenticado.pipe(
      map((e) => {
        console.log(e);
        if (e) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError((err) => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
  // canActivate(): boolean {
  //   if (!this.authservice.isAuth()) {
  //     console.log('El token no es valido o ya expiró');
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   this.router.navigate(['menu/wallet']);
  //   return true;
  // }
}
