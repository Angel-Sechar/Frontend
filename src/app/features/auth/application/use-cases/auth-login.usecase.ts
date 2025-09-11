import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken } from '../../domain/models/auth-token.model';
import { AuthRepository } from '../../domain/repositories/auth.repository';

@Injectable({ providedIn: 'root' })
export class LoginUseCase {
  private authRepo = inject(AuthRepository);

  execute(username: string, password: string): Observable<AuthToken> {
    return this.authRepo.login(username, password);
  }
}
