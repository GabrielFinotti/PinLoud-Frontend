import { Routes } from '@angular/router';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { ExplorarComponent } from './pages/explorar/explorar.component';
import { CriarComponent } from './pages/criar/criar.component';
import { UserComponent } from './pages/user/user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'explorar', component: ExplorarComponent },
  { path: 'criar', component: CriarComponent },
  {
    path: 'usuario',
    children: [{ path: 'formulario', component: FormularioComponent }],
  },
  { path: '**', component: NotFoundComponent },
];
