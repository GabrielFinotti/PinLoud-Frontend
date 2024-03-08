import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PinsComponent } from './pages/pins/pins.component';
import { PinCreateComponent } from './pages/pin-create/pin-create.component';
import { FormComponent } from './pages/form/form.component';
import { UserComponent } from './pages/user/user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PinsViewComponent } from './pages/pins-view/pins-view.component';
import { createPinGuard } from './guards/userRouter/create-pin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'pins', component: PinsComponent },
  { path: 'pins/view/:id', component: PinsViewComponent },
  {
    path: 'create',
    component: PinCreateComponent,
    canActivate: [createPinGuard],
  },
  {
    path: 'account',
    children: [
      { path: 'form', component: FormComponent },
      { path: 'user', component: UserComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
