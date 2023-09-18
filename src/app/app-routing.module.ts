import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children:[
      {
        path: '',
        component: InicioComponent, canActivate: [authGuard]
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }    
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [authGuard]
    
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
