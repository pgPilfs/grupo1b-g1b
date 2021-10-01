import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (!this.authservice.isAuth()) {
      console.log('El token no es valido o ya expiró');
      this.router.navigate(['login']);
      return false;
    }
    this.router.navigate(['menu/wallet']);
    return true;
  }
}
