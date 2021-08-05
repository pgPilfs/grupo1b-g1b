import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout';

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

  mode = new FormControl('over');
  mobileQuery: MediaQueryList;


   @ViewChild(MatSidenav)
   sidenav!: MatSidenav;

   ops: Operation[] = [
     {value: '/menu/peso', viewValue: 'Peso'},
     {value: '/menu/dolar', viewValue: 'Dolar'},
     {value: '/menu/crypto', viewValue: 'Crypto'}
   ];


  constructor(private observer: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  private _mobileQueryListener(_mobileQueryListener: any) {
    throw new Error('Method not implemented.');
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

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
