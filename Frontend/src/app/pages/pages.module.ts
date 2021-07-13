import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet/wallet.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WalletComponent,
    NotfoundComponent,
    HomeComponent,
    TermsComponent,
    SigninComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
=======
    AppRoutingModule,
>>>>>>> dab061356cc6d12f4a91ecd04b4e28a019d5db73
  ],
  exports: [WalletComponent, NotfoundComponent, HomeComponent, TermsComponent, SigninComponent, LoginComponent]
})


export class PagesModule { }
