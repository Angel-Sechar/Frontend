import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthToken } from '../domain/models/auth-token.model';
import { User } from '../domain/models/auth-user.model';
import { AuthRepository } from '../domain/repositories/auth.repository';

@Injectable({ providedIn: 'root' })
export class AuthHttpService implements AuthRepository {
  private http = inject(HttpClient);

  private baseUrl = `${environment.apiGatewayUrl}/auth`;

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.baseUrl}/login`, { username, password });
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/logout`, {});
  }

  refreshToken(token: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.baseUrl}/refresh`, { token });
  }

  getCurrentUser(): Observable<User | null> {
    return this.http.get<User | null>(`${this.baseUrl}/me`);
  }
}
