import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { MenuComponent } from './pages/wallet/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsComponent } from './pages/terms/terms.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { ProyectComponent } from './pages/proyect/proyect.component';
import { PerfilComponent } from './pages/wallet/perfil/perfil.component';
import { PesoComponent } from './pages/wallet/operation/peso/peso.component';
import { WalletComponent } from './pages/wallet/wallet/wallet.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
  {path: 'terms', component: TermsComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'proyect', component: ProyectComponent},
  {path:'menu', component: MenuComponent,
  children:[
    {path: 'peso', component: PesoComponent},
    {path: 'wallet', component: WalletComponent},
    {path: 'perfil', component: PerfilComponent},
  ]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component: NotfoundComponent},
  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
