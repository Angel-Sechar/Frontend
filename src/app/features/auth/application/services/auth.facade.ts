import { Injectable, inject } from '@angular/core';
import { LoginUseCase } from '@auth/application/use-cases/auth-login.usecase';
import { AuthToken } from '@auth/domain/models/auth-token.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private loginUC = inject(LoginUseCase);

  login(username: string, password: string): Observable<AuthToken> {
    return this.loginUC.execute(username, password);
  }
}
