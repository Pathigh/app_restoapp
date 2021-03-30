import { Injectable } from '@angular/core';
import { MostrarUsuariosComponent } from '../pages/usuario/mostrar-usuarios.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

menu: any [] = [

{
  titulo: 'Personal',
  icono: 'mdi mdi-gauge',
  submenu: [
    { titulo: 'Usuarios', url: '/usuario'},
    { titulo: 'Mostrar Usuario', url: '/mostrar-usuarios'}
      ]

},

{
titulo: 'Control de Menu',
  icono: 'mdi mdi-gauge',
  submenu: [
    { titulo: 'Crear Menu', url: '/menu'},
    { titulo: 'Mostrar Menu', url: '/mostrar-menu'}
     ]
},
{
  titulo: 'Mesas',
  icono: 'mdi mdi-gauge',
  submenu: [
    { titulo: 'Mesas', url: '/mesas'},
    { titulo: 'Mostrar Mesas', url: '/mostrar-mesas'}
     ]
}
 ];

  constructor() { }
}
