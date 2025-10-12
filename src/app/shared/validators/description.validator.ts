import { AbstractControl, ValidationErrors } from '@angular/forms';

export function descriptionValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value == null || value === '') return null;

  // Permite letras Unicode (acentos, ñ), números, espacios y los caracteres ()._,&;
  const regex = /^[\p{L}0-9()._,&;\s]+$/u;
  return regex.test(value) ? null : { invalidName: true };
}
