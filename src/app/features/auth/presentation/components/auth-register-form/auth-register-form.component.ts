import { ChangeDetectionStrategy, Component, input, OnInit, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoPasteDirective } from '@app/shared/directives/no-paste.directive';
import { AuthRegisterDto } from '@auth/application/dtos';
import { RegisterForm } from '@auth/presentation/types';
import { CustomInputComponent, TextNavigateComponent } from '@shared/components';
import { ConstantModel } from '@shared/models';

@Component({
  selector: 'auth-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CustomInputComponent,
    MatOption,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NoPasteDirective,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCheckboxModule,
    TextNavigateComponent,
  ],
  templateUrl: './auth-register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthRegisterFormComponent implements OnInit {
  formGroup = input.required<FormGroup<RegisterForm>>();

  documentTypes = input.required<ConstantModel[]>();

  register = output<AuthRegisterDto>();

  documentTypesLocal: ConstantModel[] = [];

  ngOnInit(): void {
    this.documentTypesLocal = [...this.documentTypes()];
  }

  onSubmit(): void {
    const form = this.formGroup();

    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }

    this.register.emit(form.getRawValue());
  }
}
