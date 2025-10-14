import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRegisterDto } from '@auth/application/dtos';
import { AuthService } from '@auth/application/services/auth.service';
import { AuthRegisterFormComponent } from '@auth/presentation/components';
import { RegisterForm } from '@auth/presentation/types';
import { ButtonNavigateComponent } from '@shared/components/button-navigate/button-navigate.component';
import { ConstantModel } from '@shared/models';
import { strongPassword } from '@shared/validators/password.validator';

@Component({
  selector: 'auth-register-container',
  standalone: true,
  imports: [AuthRegisterFormComponent, ButtonNavigateComponent],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);

  private router = inject(Router);

  private authServices = inject(AuthService);

  documentTypes: ConstantModel[] = [];

  form!: FormGroup<RegisterForm>;

  ngOnInit(): void {
    this.getDocumentTypes();

    this.form = this.fb.group({
      documentType: this.fb.control<ConstantModel>(this.documentTypes[0], {
        validators: [Validators.required],
      }),
      documentNumber: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
      }),
      names: this.fb.control('', {
        validators: [Validators.required, Validators.maxLength(50)],
      }),
      fatherLastName: this.fb.control('', {
        validators: [Validators.required, Validators.maxLength(50)],
      }),
      motherLastName: this.fb.control('', {
        validators: [Validators.required, Validators.maxLength(50)],
      }),
      birthDate: this.fb.control<Date>(new Date(), {
        validators: [Validators.required],
      }),
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(32), strongPassword],
      }),
      repeatPassword: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(32), strongPassword],
      }),
      acceptTerms: this.fb.control(false, {
        validators: [Validators.requiredTrue],
      }),
    });
  }

  onRegister(credentials: AuthRegisterDto): void {
    this.authServices.register(credentials);
  }

  getDocumentTypes(): void {
    this.documentTypes = [
      { id: 5, value: 1, description: 'DNI', related: 0, state: 1 },
      { id: 5, value: 2, description: 'PASAPORTE', related: 0, state: 1 },
      { id: 5, value: 3, description: 'CE', related: 0, state: 1 },
    ];
  }
}
