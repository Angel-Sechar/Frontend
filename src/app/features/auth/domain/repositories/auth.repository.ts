import { AuthToken } from '@auth/domain/models/auth-token.model';
import { User } from '@auth/domain/models/auth-user.model';
import { Observable } from 'rxjs';

export abstract class AuthRepository {
  abstract login(username: string, password: string): Observable<AuthToken>;
  abstract logout(): Observable<void>;
  abstract refreshToken(token: string): Observable<AuthToken>;
  abstract getCurrentUser(): Observable<User | null>;
}
