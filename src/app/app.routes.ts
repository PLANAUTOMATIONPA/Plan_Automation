import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'nosotros', component: NosotrosComponent}
];
