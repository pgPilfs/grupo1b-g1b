import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router'  
import { Cliente, ClienteService } from 'src/app/servicios/cliente.service';


interface Operation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  perfil: any;

  mobileQuery: MediaQueryList;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ops: Operation[] = [
    {value: '/menu/peso', viewValue: 'Peso'},
  ];


  constructor(private observer: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private authservice: AuthService,private router: Router, private clienteService: ClienteService) { 
    let variable = JSON.parse(localStorage.getItem('identity'));
    let email = variable.Email;
    console.log(email);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  private _mobileQueryListener(_mobileQueryListener: any) {
    throw new Error('Method not implemented.');
  }

  loadCliente(email){
    this.clienteService.getClienteById(email).subscribe(data  => {
        console.log(data)
        this.perfil = data;
    }
    )
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  onCerrarSesion(){
    this.authservice.logOut();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    let variable = JSON.parse(localStorage.getItem('identity'));
    let email = variable.Email;
    console.log(email);
    this.loadCliente(email);
  }

}