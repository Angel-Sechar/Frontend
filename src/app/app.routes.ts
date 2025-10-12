import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('@app/features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@static/static.routes').then((m) => m.StaticRoutes),
  },
  {
    path: 'auth',
    pathMatch: 'prefix',
    loadChildren: () => import('@auth/auth.routes').then((m) => m.AuthRoutes),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
