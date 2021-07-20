import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { PesoComponent } from './wallet/operation/peso/peso.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WalletComponent,
    NotfoundComponent,
    HomeComponent,
    TermsComponent,
    SigninComponent,
    LoginComponent,
    PesoComponent,
    
  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [WalletComponent, NotfoundComponent, HomeComponent, TermsComponent, SigninComponent, LoginComponent, PesoComponent]
})


export class PagesModule { }
