import { Component, ViewChild, OnInit,  Inject, Injectable  } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog,  MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  
  constructor(public dataDialog: MatDialog) {}

  ngOnInit(): void {}

  public openDialog(): void {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.data = {};

      this.dataDialog.open(DataDialogComponent, dialogConfig);
  }
  
}

@Component({
  selector: 'edit',
  templateUrl: 'edit.html',
})

export class DataDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}


export interface DialogData {}

