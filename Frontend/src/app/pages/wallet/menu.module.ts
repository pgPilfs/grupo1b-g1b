import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { WalletComponent } from './wallet/wallet.component';
import { PesoComponent } from './operation/peso/peso.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule, MatSingleDateSelectionModel } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WalletComponent,
    PesoComponent,
    PerfilComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule, 
    MatProgressBarModule,
    MatDatepickerModule,
    ReactiveFormsModule
    
  ],
  exports:[WalletComponent, PesoComponent, PerfilComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class MenuModule { }