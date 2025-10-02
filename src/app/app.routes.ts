import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('@static/pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
  },
  {
    path: 'terms-of-service',
    loadComponent: () =>
      import('@static/pages/terms-of-service/terms-of-service.component').then(
        (m) => m.TermsOfServiceComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@auth/presentation/components/auth-login/auth-login.component').then(
        (m) => m.AuthLoginFormComponent,
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
