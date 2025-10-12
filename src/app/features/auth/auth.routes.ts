import { Routes } from '@angular/router';
import { AUTH_PROVIDERS } from '@auth/infrastructure/providers';

export const AuthRoutes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    providers: [...AUTH_PROVIDERS],
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@auth/presentation/containers/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@auth/presentation/containers/register/register.component').then(
            (m) => m.RegisterComponent,
          ),
      },
    ],
  },
];
