import { AbstractControl, ValidationErrors } from '@angular/forms';

export function numericString(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value == null || value === '') return null;
  return /^\d+$/.test(value) ? null : { invalidDocument: true };
}
