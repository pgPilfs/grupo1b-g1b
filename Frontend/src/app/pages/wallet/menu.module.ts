import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { WalletComponent } from './wallet/wallet.component';
import { PesoComponent } from './operation/peso/peso.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DolarComponent } from './dolar/dolar.component';
import { CryptoComponent } from './crypto/crypto.component';




@NgModule({
  declarations: [
    WalletComponent,
    PesoComponent,
    PerfilComponent,
    DolarComponent,
    CryptoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[WalletComponent, PesoComponent, PerfilComponent, DolarComponent, CryptoComponent],
  
 
})
export class MenuModule { }