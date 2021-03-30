import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';


import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import {MostrarUsuariosComponent} from './pages/usuario/mostrar-usuarios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


import { RouterpagesComponent } from './pages/routerpages.component';
import { MostrarMenuComponent } from './pages/product/mostrar-menu.component';
import { MenuComponent } from './pages/product/menu.component';
import { MostrarMesasComponent } from './pages/mesas/mostrar-mesas.component';


const routes: Routes = [
  {
    path: '', component: RouterpagesComponent,

    children: [

      {path: 'dashboard', component: DashboardComponent},
      {path: 'usuario', component: UsuarioComponent},
      {path: 'mostrar-usuarios', component: MostrarUsuariosComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'mostrar-menu', component: MostrarMenuComponent},
      {path: 'mesas', component: MesasComponent},
      {path: 'mostrar-mesas', component: MostrarMesasComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

    ]
  },

 {path: 'login', component: LoginComponent},
 {path: 'registro', component: RegistroComponent },
 {path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
