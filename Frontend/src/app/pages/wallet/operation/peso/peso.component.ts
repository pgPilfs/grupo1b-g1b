import { Component, OnInit } from '@angular/core';
import { 
  AbstractControl, 
  ValidationErrors, 
  ValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators 
} from '@angular/forms';
import data from './data.json';

interface Month {
  mes: string;
}
interface Year {
  anio: string;
}
@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {

  operacionForm: FormGroup;
  form: any = {};
  //carga de movimientos SACAR ESTA PARTE
  movimientos: { id: String; cuenta: String; fecha: String; monto: String }[] = data;
  operacion: string = "Ingresar";
  
  get cardNumber(): AbstractControl {
    return this.operacionForm.controls['cardNumber'];
  }
  get numberCVV(): AbstractControl {
    return this.operacionForm.controls['numberCVV'];
  }
  get month(): AbstractControl {
    return this.operacionForm.controls['month'];
  }
  get year(): AbstractControl {
    return this.operacionForm.controls['year'];
  }
  get monto(): AbstractControl {
    return this.operacionForm.controls['monto'];
  }


  private pattNumbers: any = /^[0-9]{7,}$/;

  constructor( private formBuilder: FormBuilder ) {
    this.operacionForm = this.formBuilder.group(
      {
        cardNumber:['',[
          Validators.required,
          Validators.pattern(this.pattNumbers),
          Validators.minLength(16),
          Validators.maxLength(16),
        ]
      ],
        numberCVV:['',[
          Validators.required,
          Validators.pattern(this.pattNumbers),
          Validators.minLength(3),
          Validators.maxLength(3),
        ]],
        month:['',[
          Validators.required
        ]],
        year:['',[
          Validators.required
        ]],
        monto:['',[
          Validators.required,
          Validators.min(100),
        ]],
      });
      
  }

  selectFormControl = new FormControl('', Validators.required);
  months: Month[] = [
    { mes: '01' },
    { mes: '02' },
    { mes: '03' },
    { mes: '04' },
    { mes: '05' },
    { mes: '06' },
    { mes: '07' },
    { mes: '08' },
    { mes: '09' },
    { mes: '10' },
    { mes: '11' },
    { mes: '12' },
  ];
  years: Year[] = [
    { anio: '22' },
    { anio: '23' },
    { anio: '24' },
    { anio: '25' },
    { anio: '26' },
    { anio: '27' },
    { anio: '28' },
    { anio: '29' },
    { anio: '30' },
  ];
  ngOnInit(): void{};

  onSubmit() {
    console.log("funciona");
    if (this.operacionForm.valid) {
      console.log(this.operacionForm.value);
    }
  }
  
  get cardNumberField() {
    return this.operacionForm.get('cardNumber');
  }
  get numberCVVField() {
    return this.operacionForm.get('numberCVV');
  }
  get monthField() {
    return this.operacionForm.get('month');
  }
  get yearField() {
    return this.operacionForm.get('year');
  }
  get montoField() {
    return this.operacionForm.get('monto');
  }

  
  habilitarIngreso(): void {
    this.operacion = "Ingresar";
  }

  habilitarRetiro(): void {
    this.operacion = "Retirar";
  }

  
}
