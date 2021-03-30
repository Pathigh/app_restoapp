import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterpagesComponent } from './pages/routerpages.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import {MostrarUsuariosComponent} from './pages/usuario/mostrar-usuarios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { MenuComponent } from './pages/product/menu.component';
import { MostrarMenuComponent } from './pages/product/mostrar-menu.component';

import { MostrarMesasComponent } from './pages/mesas/mostrar-mesas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    RouterpagesComponent,
    MesasComponent,
    UsuarioComponent,
    MostrarUsuariosComponent,
    MenuComponent,
    MostrarMenuComponent,

    MostrarMesasComponent
          ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
