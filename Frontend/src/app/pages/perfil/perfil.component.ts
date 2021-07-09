import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  mail=new FormControl('', [Validators.required, Validators.email]);
  user=new FormControl('', [Validators.required, Validators.email]);
  calle=new FormControl('', [Validators.required, Validators.email]);
  piso=new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

}
