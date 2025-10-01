import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from '@app/shared/components';
import { LoginForm } from '@auth/presentation/types';

@Component({
  selector: 'auth-login',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './auth-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginComponent {
  formGroup = input.required<FormGroup<LoginForm>>();

  onSubmit() {}

  loginWithGoogle() {}

  loginWithFacebook() {}
}
