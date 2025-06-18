import { Routes } from '@angular/router';
import { Index } from './components/index';
import { Menu } from './components/menu/menu';
import { Nosotros } from './components/nosotros/nosotros';
import { Contacto } from './components/contacto/contacto';
import { Reservas } from './components/reservas/reservas';

export const routes: Routes = [
     {
        path: '',
        component: Index,
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: Menu
    },
    {
        path: 'nosotros',
        component: Nosotros
    },
    {
        path: 'contacto',
        component: Contacto
    },
    {
        path: 'reservas',
        component: Reservas
    }
];
