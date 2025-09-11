import { Observable } from 'rxjs';
import { AuthToken } from '../models/auth-token.model';
import { User } from '../models/auth-user.model';

export abstract class AuthRepository {
  abstract login(username: string, password: string): Observable<AuthToken>;
  abstract logout(): Observable<void>;
  abstract refreshToken(token: string): Observable<AuthToken>;
  abstract getCurrentUser(): Observable<User | null>;
}
