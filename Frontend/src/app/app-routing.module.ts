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
<<<<<<< HEAD
import { PesoComponent } from './pages/wallet/operation/peso/peso.component';
import { MenuComponent } from './pages/wallet/menu/menu.component';

const routes: Routes = [

=======
import { DevelopersComponent } from './pages/developers/developers.component';
import { ProyectComponent } from './pages/proyect/proyect.component';


const routes: Routes = [
>>>>>>> 3a6b9e21b343e49fc53e579a1f972fdb3d977fd0
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'terms', component: TermsComponent},
<<<<<<< HEAD
  {path:'wallet',
  loadChildren: () => import('./pages/wallet/wallet.module').then(m=>m.WalletModule)},
  {path: 'peso', component: PesoComponent},
  {path: 'menu', component: MenuComponent},
  {path:'**', component: NotfoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
=======
  {path: 'contact', component: ContactComponent},
  {path: 'proyect', component: ProyectComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component: NotfoundComponent},
>>>>>>> 3a6b9e21b343e49fc53e579a1f972fdb3d977fd0
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
