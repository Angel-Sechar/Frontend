import { Routes } from '@angular/router';
import { AUTH_PROVIDERS } from '@auth/infrastructure/providers';

export const AuthRoutes: Routes = [
  {
    path: '',
    providers: [...AUTH_PROVIDERS],
    pathMatch: 'prefix',
    children: [
      {
        path: 'login',
        providers: [...AUTH_PROVIDERS],
        loadComponent: () =>
          import('@auth/presentation/containers/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        providers: [...AUTH_PROVIDERS],
        loadComponent: () =>
          import('@auth/presentation/containers/register/register.component').then(
            (m) => m.RegisterComponent,
          ),
      },
    ],
  },
];
