import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from '@app/shared/components';
import { LoginForm } from '@auth/presentation/types';

@Component({
  selector: 'auth-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './auth-login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginFormComponent {
  formGroup = input.required<FormGroup<LoginForm>>();

  login = output<FormGroup<LoginForm>>();

  googleLogin = output<void>();

  facebookLogin = output<void>();

  navigateToRegister = output<void>();

  forgotPassword = output<void>();

  onSubmit() {
    if (this.formGroup().valid) {
      this.login.emit(this.formGroup());
    }
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
