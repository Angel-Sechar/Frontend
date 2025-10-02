import { AbstractControl, ValidationErrors } from '@angular/forms';
import { escapeForRegex } from '@shared/utils/regex';

export const specialCharactersAllowed: string = '@$!#*?&._/+-=.';

export const REGEX_WHITELIST: RegExp = new RegExp(
  `^[A-Za-z0-9${escapeForRegex(specialCharactersAllowed)}]+$`,
);

const REGEX_SPECIAL = new RegExp(`[${escapeForRegex(specialCharactersAllowed)}]`);

export function strongPassword(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;

  const errors: ValidationErrors = {};

  if (!REGEX_WHITELIST.test(value)) {
    errors['invalidCharacter'] = true;
  }

  if (!/[a-z]/.test(value)) errors['missingLowercase'] = true;

  if (!/[A-Z]/.test(value)) errors['missingUppercase'] = true;

  if (!/\d/.test(value)) errors['missingNumber'] = true;

  if (!REGEX_SPECIAL.test(value)) errors['missingSpecial'] = true;

  return Object.keys(errors).length ? errors : null;
}
