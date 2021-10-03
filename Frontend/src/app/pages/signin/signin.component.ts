import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente, ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  ProList: any[];
  CiuList: any[];

  DniFilename: string;
  DniFilePath: string;

  cliente: Cliente = new Cliente();
  // cuenta: Cuenta = new Cuenta();
  hide1 = true;
  hide = true;
  step: any = 1;

  formsign: FormGroup;
  firstFormGroup: FormGroup | undefined;
  secondFormGroup: FormGroup | undefined;
  minDate: Date;
  maxDate: Date;

  files: string[] = [];
  selectedFiles: any;
  selectedFilesF: any;

  onFileSelected(event: { target: { files: string | any[] } }) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.files.push(event.target.files[i].name);
        console.log(event.target.files[0].name);
      }
    }
  }

  onFileSelectedF(event: { target: { files: string | any[] } }) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.files.push(event.target.files[i].name);
        console.log(event.target.files[0].name);
      }
    }
  }

  onPasswordChange() {
    if (this.cpassword.value == this.password.value) {
      this.cpassword.setErrors(null);
    } else {
      this.cpassword.setErrors({ mismatch: true });
    }
  }

  // getting the form control elements
  get nombre(): AbstractControl {
    return this.formsign.controls['nombre'];
  }
  get apellido(): AbstractControl {
    return this.formsign.controls['apellido'];
  }
  get email(): AbstractControl {
    return this.formsign.controls['email'];
  }
  get password(): AbstractControl {
    return this.formsign.controls['password'];
  }
  get cpassword(): AbstractControl {
    return this.formsign.controls['cpassword'];
  }
  get nombre_provincia(): AbstractControl {
    return this.formsign.controls['nombre_provincia'];
  }
  get nombre_ciudad(): AbstractControl {
    return this.formsign.controls['nombre_ciudad'];
  }
  get cpostal(): AbstractControl {
    return this.formsign.controls['cpostal'];
  }
  get domicilio(): AbstractControl {
    return this.formsign.controls['domicilio'];
  }
  get pisodpto(): AbstractControl {
    return this.formsign.controls['pisodpto'];
  }
  get cuil(): AbstractControl {
    return this.formsign.controls['cuil'];
  }
  get tel(): AbstractControl {
    return this.formsign.controls['tel'];
  }
  get fecnac(): AbstractControl {
    return this.formsign.controls['fecnac'];
  }
  get foto_dni_frente(): AbstractControl {
    return this.formsign.controls['foto_dni_frente'];
  }
  get foto_dni_reversa(): AbstractControl {
    return this.formsign.controls['foto_dni_reversa'];
  }

  private pattLetters: any = /^[a-zA-Z ]*$/;
  private pattEmail: any =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  private pattPass: any = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;
  private pattNumbers: any = /^[0-9]{7,}$/;
  private pattTel: any = /^[0-9]{10,10}$/;
  private pattAddress: any = /^[A-Za-z0-9\s]{5,50}$/;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private cdref: ChangeDetectorRef
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 90, 0, 1);
    this.maxDate = new Date(currentYear + -18, 7, 31);

    this.formsign = this.formBuilder.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(this.pattPass),
          createPasswordStrengthValidator(),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.pattEmail),
        ],
      ],
      nombre: ['', [Validators.required, Validators.pattern(this.pattLetters)]],
      apellido: [
        '',
        [Validators.required, Validators.pattern(this.pattLetters)],
      ],
      cpassword: ['', [Validators.required]],
      cpostal: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16),
        ],
      ],
      nombre_provincia: ['', [Validators.required]],
      nombre_ciudad: ['', [Validators.required]],
      domicilio: [
        '',
        [Validators.required, Validators.pattern(this.pattAddress)],
      ],
      pisodpto: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(16),
        ],
      ],
      cuil: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(11),
        ],
      ],
      tel: [
        '',
        [
          Validators.required,
          Validators.pattern(this.pattTel),
          Validators.minLength(8),
        ],
      ],
      fecnac: ['', [Validators.required]],
      foto_dni_frente: ['', [Validators.required]],
      foto_dni_reversa: ['', [Validators.required]],
    });
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit() {
    this.loadProvinciaList();
    this.loadCiudadList();
  }

  loadProvinciaList() {
    this.clienteService.getProvincias().subscribe((data) => {
      console.log(data);
      this.ProList = data;
    });
  }
  loadCiudadList() {
    this.clienteService.getCiudades().subscribe((data) => {
      console.log(data);
      this.CiuList = data;
    });
  }
  onEnviar(event: Event, cliente: Cliente) {
    event.preventDefault(); //Cancela la funcionalidad por default.

    if (this.formsign.valid) {
      console.log(cliente);

      this.clienteService.onAddCliente(cliente).subscribe((data) => {
        console.log(data);
        if (data['Id_cliente'] != 0) {
          //  console.log(cuenta);
          //  this.clienteService.onAddClienteCuenta(cuenta).subscribe( data2 =>{
          //   console.log(data2);
          //  })
          alert(
            'El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.'
          );
          this.router.navigate(['login']);
        }
      });
    } else {
      this.formsign.markAllAsTouched();
    }
  }

  uploadDni(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.clienteService.UploadDni(formData).subscribe((data: any) => {
      this.DniFilename = data.toString();
      this.DniFilePath = this.clienteService.DniUrl + this.DniFilename;
    });
  }

  next() {
    this.step = this.step + 1;
  }
  anterior() {
    this.step = this.step - 1;
  }
  confirmado() {
    this.step = 6;
  }

  selectFile(event: { target: { files: any } }) {
    this.selectedFiles = event.target.files;
  }

  selectFileF(event: { target: { files: any } }) {
    this.selectedFilesF = event.target.files;
  }

  get nombreField() {
    return this.formsign.get('nombre');
  }

  get apellidoField() {
    return this.formsign.get('apellido');
  }
  get emailField() {
    return this.formsign.get('email');
  }
  get passwordField() {
    return this.formsign.get('password');
  }
  get cpasswordField() {
    return this.formsign.get('cpassword');
  }
  get cpostalField() {
    return this.formsign.get('cpostal');
  }
  get nombre_provinciaField() {
    return this.formsign.get('nombre_provincia');
  }
  get nombre_ciudadField() {
    return this.formsign.get('nombre_ciudad');
  }
  get domicilioField() {
    return this.formsign.get('domicilio');
  }
  get pisodptoField() {
    return this.formsign.get('pisodpto');
  }
  get dniField() {
    return this.formsign.get('dni');
  }
  get cuilField() {
    return this.formsign.get('cuil');
  }
  get telField() {
    return this.formsign.get('tel');
  }
  get fecnacField() {
    return this.formsign.get('fecnac');
  }
  get foto_dni_frenteField() {
    return this.formsign.get('foto_dni_frente');
  }
  get foto_dni_reversaField() {
    return this.formsign.get('foto_dni_reversa');
  }

  //    onSiguiente(event: Event): void {
  //      event.preventDefault;

  //      if (this.formsign.valid) {
  //       var val = {
  //         Nombre:this.formsign.get("nombre"),
  //         Apellido:this.formsign.get("apellido"),
  //         Email:this.formsign.get("email"),
  //         Password:this.formsign.get("password"),
  //         Ciudad:this.formsign.get("ciudad"),
  //         Provincia:this.formsign.get("provincia"),
  //         Cuil:this.formsign.get("cuil"),
  //         Telefono:this.formsign.get("tel"),
  //         Fecnac:this.formsign.get("fecnac"),
  //         Pisodpto:this.formsign.get("pdpto"),
  //         Domicilio:this.formsign.get("domicilio")
  //       };
  //       this.clienteService.addCliente(val).subscribe(res=>{
  //         alert(res.toString());
  //       });
  //     } else {
  //       this.formsign.markAllAsTouched();
  //      }
  //    }
}

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}
function getErrorMessage() {
  throw new Error('Function not implemented.');
}
