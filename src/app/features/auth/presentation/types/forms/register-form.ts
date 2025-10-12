import { FormControl } from '@angular/forms';
import { DocumentFormType } from '@shared/types/document-form.type';

export interface RegisterForm {
  documentType: FormControl<DocumentFormType>;
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
