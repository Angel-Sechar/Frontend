import { Injectable, inject } from '@angular/core';
import { AuthLoginDto } from '@auth/application/dtos';
import { AuthUser } from '@auth/domain/entities';
import { AuthUserRepository } from '@auth/domain/repositories';
import { AUTH_REPOSITORY } from '@auth/infrastructure/providers';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginUseCase {
  private readonly authRepository = inject<AuthUserRepository>(AUTH_REPOSITORY);

  execute(loginData: AuthLoginDto): Observable<AuthUser> {
    return this.authRepository.login(loginData);
  }
}
