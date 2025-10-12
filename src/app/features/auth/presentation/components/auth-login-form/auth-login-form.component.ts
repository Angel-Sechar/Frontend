import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { CustomInputComponent } from '@app/shared/components';
import { AuthLoginDto } from '@auth/application/dtos';
import { LoginForm } from '@auth/presentation/types';

@Component({
  selector: 'auth-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent, MatCard],
  templateUrl: './auth-login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginFormComponent {
  formGroup = input.required<FormGroup<LoginForm>>();

  login = output<AuthLoginDto>();

  googleLogin = output<void>();

  facebookLogin = output<void>();

  navigateToRegister = output<void>();

  forgotPassword = output<void>();

  onSubmit(): void {
    const form = this.formGroup();

    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }

    this.login.emit(form.getRawValue());
  }

  loginWithGoogle() {
    this.googleLogin.emit();
  }

  loginWithFacebook() {
    this.facebookLogin.emit();
  }

  onNavigateToRegister() {
    this.navigateToRegister.emit();
  }

  onForgotPassword() {
    this.forgotPassword.emit();
  }
}
