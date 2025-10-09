import { Routes } from '@angular/router';
import { AUTH_PROVIDERS } from '@auth/infrastructure/providers';

export const AuthRoutes: Routes = [
  {
    path: 'ajsv',
    pathMatch: 'prefix',
    providers: [...AUTH_PROVIDERS],
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@auth/presentation/containers/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },
];
