import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthLoginDto, AuthRegisterDto } from '@auth/application/dtos';
import { AuthUser } from '@auth/domain/entities';
import { AuthUserRepository } from '@auth/domain/repositories/auth-user.repository';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class AuthHttpMicroservice implements AuthUserRepository {
  private http = inject(HttpClient);

  private authBaseUrl = `${environment.apiGatewayUrl}/auth`;

  login(authLogin: AuthLoginDto): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.authBaseUrl}/login`, authLogin);
  }

  register(authRegister: AuthRegisterDto): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.authBaseUrl}/register`, authRegister);
  }
}
