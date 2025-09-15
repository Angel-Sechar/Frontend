import { Injectable, inject } from '@angular/core';
import { AuthToken } from '@auth/domain/models/auth-token.model';
import { AuthRepository } from '@auth/domain/repositories/auth.repository';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginUseCase {
  private authRepo = inject(AuthRepository);

  execute(username: string, password: string): Observable<AuthToken> {
    return this.authRepo.login(username, password);
  }
}
