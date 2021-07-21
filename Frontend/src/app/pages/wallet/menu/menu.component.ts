import { ViewChild } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

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

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ops: Operation[] = [
    {value: 'peso-o', viewValue: 'Peso'},
    {value: 'dolar-1', viewValue: 'Dolar'},
    {value: 'crypto-2', viewValue: 'Crypto'}
  ];

  constructor(private observer: BreakpointObserver) {}

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
  }

}
