import { Injectable, inject } from '@angular/core';
import { AuthRegisterDto } from '@auth/application/dtos';
import { AuthUser } from '@auth/domain/entities';
import { AuthUserRepository } from '@auth/domain/repositories';
import { AUTH_REPOSITORY } from '@auth/infrastructure/providers';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class RegisterUseCase {
  private readonly authRepository = inject<AuthUserRepository>(AUTH_REPOSITORY);

  execute(registerData: AuthRegisterDto): Observable<AuthUser> {
    return this.authRepository.register(registerData);
  }
}
