import { AuthLoginDto, AuthRegisterDto } from '@auth/application/dtos';
import { AuthUser } from '@auth/domain/entities';
import { Observable } from 'rxjs';

export interface AuthUserRepository {
  login(authUser: AuthLoginDto): Observable<AuthUser>;
  register(authUser: AuthRegisterDto): Observable<AuthUser | null>;
  // findByEmail(email: string): Promise<AuthUser | null>;
  // findAll(): Promise<AuthUser[]>;
  // save(user: AuthUser): Promise<AuthUser>;
  // delete(id: string): Promise<void>;
}
