import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { strongPassword } from '@app/shared/validators/password.validator';
import { AuthLoginFormComponent } from '@auth/presentation/components/auth-login/auth-login.component';
import { LoginForm } from '@auth/presentation/types';

@Component({
  selector: 'auth-login-page',
  standalone: true,
  imports: [AuthLoginFormComponent],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);

  form: FormGroup<LoginForm> = this.fb.group({
    email: this.fb.control('', { validators: [Validators.required, Validators.email] }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(32), strongPassword],
    }),
  });
}
