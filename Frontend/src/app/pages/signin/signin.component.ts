import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  //VALIDACIONES FORMULARIO 1

  mail=new FormControl('', [Validators.required, Validators.email]);
  pass=new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8),Validators.pattern('[a-zA-Z]')]);
  name=new FormControl('', [Validators.required]);
  surname= new FormControl('', [Validators.required]);
  user= new FormControl('', [Validators.required]);
  cpass=new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8),Validators.pattern('[a-zA-Z]')]);

  //VALIDACIONES FORMULARIO 2

  pais= new FormControl('', [Validators.required]);
  cp= new FormControl('', [Validators.required]);
  provincia= new FormControl('', [Validators.required]);
  ciudad= new FormControl('', [Validators.required]);
  calle= new FormControl('', [Validators.required]);
  piso= new FormControl('', [Validators.required]);

  //VALIDACIONES FORMULARIO 3

  dni= new FormControl('', [Validators.required]);
  foto2= new FormControl('', [Validators.required]);
  fecnac= new FormControl('', [Validators.required]);
  foto= new FormControl('', [Validators.required]);

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  //METODO GET PARA OBTENER LAS VALIDACIONES Y VALIDAR LOS INPUT CON NGIF EN EL HTML

  get mailField(){
    return this.mail;
  }

  get passField(){
    return this.pass;
  }
  get userField(){
    return this.user;
  }
  get surnameField(){
    return this.surname;
  }
  get nameField(){
    return this.name;
  }
  get cpassField(){
    return this.cpass;
  }
  get paisField(){
    return this.pais;
  }
  get cpField(){
    return this.cp;
  }
  get provinciaField(){
    return this.provincia;
  }
  get ciudadField(){
    return this.ciudad;
  }
  get calleField(){
    return this.calle;
  }
  get pisoField(){
    return this.piso;
  }
  get dniField(){
    return this.dni;
  }
  get fecnacField(){
    return this.fecnac;
  }
  get fotoField(){
    return this.foto;
  }
  get foto2Field(){
    return this.foto2;
  }
 
}
