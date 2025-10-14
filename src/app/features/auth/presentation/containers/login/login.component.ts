import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginDto } from '@auth/application/dtos/auth-login.dto';
import { AuthService } from '@auth/application/services/auth.service';
import { AuthLoginFormComponent } from '@auth/presentation/components';
import { LoginForm } from '@auth/presentation/types';
import { ButtonNavigateComponent } from '@shared/components/button-navigate/button-navigate.component';
import { strongPassword } from '@shared/validators/password.validator';

@Component({
  selector: 'auth-login-container',
  standalone: true,
  imports: [AuthLoginFormComponent, ButtonNavigateComponent],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);

  private router = inject(Router);

  private authServices = inject(AuthService);

  form: FormGroup<LoginForm> = this.fb.group({
    email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(32), strongPassword],
    }),
  });

  onNavigateToHome(): void {
    this.router.navigate(['/home']);
  }

  async onLogin(credentials: AuthLoginDto) {
    try {
      const user = await this.authServices.login(credentials);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  onGoogleLogin(): void {
    this.router.navigate(['/stc/in-building']);
  }

  onFacebookLogin(): void {
    this.router.navigate(['/stc/in-building']);
  }

  onNavigate(path: string): void {
    this.router.navigate([path]);
  }

  onForgotPassword(): void {
    this.router.navigate(['/stc/in-building']);
  }

  onNavigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
