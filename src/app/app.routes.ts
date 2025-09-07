import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'contacto', component: ContactoComponent}
];
