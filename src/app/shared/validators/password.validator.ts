import { AbstractControl, ValidationErrors } from '@angular/forms';
import { REGEX_PASSWORD, specialCharactersAllowed } from '@shared/helpers/regex-form.helper';
import { escapeForRegex } from '@shared/utils/escape-for-regex';

const REGEX_SPECIAL = new RegExp(`[${escapeForRegex(specialCharactersAllowed)}]`);

export function strongPassword(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;

  const errors: ValidationErrors = {};

  if (!REGEX_PASSWORD.test(value)) {
    errors['invalidCharacter'] = true;
  }

  if (!/[a-z]/.test(value)) errors['missingLowercase'] = true;

  if (!/[A-Z]/.test(value)) errors['missingUppercase'] = true;

  if (!/\d/.test(value)) errors['missingNumber'] = true;

  if (!REGEX_SPECIAL.test(value)) errors['missingSpecial'] = true;

  return Object.keys(errors).length ? errors : null;
}
