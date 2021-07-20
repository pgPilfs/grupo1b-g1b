import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { DevelopersComponent } from './developers/developers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ContactComponent } from './contact/contact.component';
import { ProyectComponent } from './proyect/proyect.component';



@NgModule({
  declarations: [
    WalletComponent,
    NotfoundComponent,
    HomeComponent,
    TermsComponent,
    SigninComponent,
    LoginComponent,
<<<<<<< HEAD
  
=======
    DevelopersComponent,
    ContactComponent,
    ProyectComponent
>>>>>>> 3a6b9e21b343e49fc53e579a1f972fdb3d977fd0
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
<<<<<<< HEAD
    
=======
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
>>>>>>> 3a6b9e21b343e49fc53e579a1f972fdb3d977fd0
  ],
  exports: [WalletComponent, NotfoundComponent, HomeComponent, TermsComponent, SigninComponent, LoginComponent, ContactComponent, ProyectComponent],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es'},
  ]
})

export class PagesModule{ }