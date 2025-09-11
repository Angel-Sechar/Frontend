import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken } from '../../domain/models/auth-token.model';
import { LoginUseCase } from '../use-cases/auth-login.usecase';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private loginUC = inject(LoginUseCase);

  login(username: string, password: string): Observable<AuthToken> {
    return this.loginUC.execute(username, password);
  }
}
