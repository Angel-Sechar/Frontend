import { Routes } from '@angular/router';

export const StaticRoutes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('@static/pages/privacy-policy/privacy-policy.component').then(
            (m) => m.PrivacyPolicyComponent,
          ),
      },
      {
        path: 'terms-of-service',
        loadComponent: () =>
          import('@static/pages/terms-of-service/terms-of-service.component').then(
            (m) => m.TermsOfServiceComponent,
          ),
      },
      {
        path: 'in-building',
        loadComponent: () =>
          import('@static/pages/in-building/in-building.component').then((m) => m.InBuildingComponent),
      },
    ],
  },
];
