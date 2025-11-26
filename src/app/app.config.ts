import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_ID, ApplicationConfig, isDevMode, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withDebugTracing } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { routes } from '@app/app.routes';
import { MATERIAL_DATE_PROVIDERS } from '@core/config/date-format.config';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_ID, useValue: 'campus-rent' },
    provideRouter(routes, withComponentInputBinding(), withDebugTracing()),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideZonelessChangeDetection(),
    MATERIAL_DATE_PROVIDERS,
  ],
};
