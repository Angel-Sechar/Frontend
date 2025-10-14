import { InjectionToken } from '@angular/core';
import { AuthUserRepository } from '@auth/domain/repositories';
import { AuthHttpMicroservice } from '@auth/infrastructure/microservices';

export const AUTH_REPOSITORY = new InjectionToken<AuthUserRepository>('AuthUserRepository');

export const AUTH_PROVIDERS = [{ provide: AUTH_REPOSITORY, useClass: AuthHttpMicroservice }];
