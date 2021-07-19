import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsComponent } from './pages/terms/terms.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PesoComponent } from './pages/wallet/operation/peso/peso.component';
import { ProyectComponent } from './pages/proyect/proyect.component';
import { DevelopersComponent } from './pages/developers/developers.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'proyect', component: ProyectComponent},
  {path: 'developers', component: DevelopersComponent},
  {path:'wallet',
  loadChildren: () => import('./pages/wallet/wallet.module').then(m=>m.WalletModule)},
  {path: 'peso', component: PesoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component: NotfoundComponent},

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
