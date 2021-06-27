import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';
import { WalletComponent } from './pages/wallet/wallet/wallet.component';



const routes: Routes = [  
  {
    path:'',
    redirectTo: 'layout',
    pathMatch: 'full'
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'wallet',
    component: WalletComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
  {
  path:'shared',
  loadChildren: () => import('./shared/shared.module').then(m=>m.SharedModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
