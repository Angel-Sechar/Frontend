import { FormControl } from '@angular/forms';
import { ConstantModel } from '@shared/models';

export interface RegisterForm {
  documentType: FormControl<ConstantModel>;
  documentNumber: FormControl<string>;
  names: FormControl<string>;
  fatherLastName: FormControl<string>;
  motherLastName: FormControl<string>;
  birthDate: FormControl<Date>;
  email: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
  acceptTerms: FormControl<boolean>;
}
