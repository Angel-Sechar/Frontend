import { Injectable, inject } from '@angular/core';
import { AuthLoginDto, AuthRegisterDto } from '@auth/application/dtos';
import { LoginUseCase, RegisterUseCase } from '@auth/application/use-cases';

@Injectable({ providedIn: 'any' })
export class AuthService {
  private readonly authLogin = inject(LoginUseCase);

  private readonly authRegister = inject(RegisterUseCase);

  login(dto: AuthLoginDto) {
    return this.authLogin.execute(dto);
  }

  register(dto: AuthRegisterDto) {
    return this.authRegister.execute(dto);
  }
}
