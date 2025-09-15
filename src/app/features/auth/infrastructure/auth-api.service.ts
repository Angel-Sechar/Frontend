import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthToken } from '@auth/domain/models/auth-token.model';
import { User } from '@auth/domain/models/auth-user.model';
import { AuthRepository } from '@auth/domain/repositories/auth.repository';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

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
