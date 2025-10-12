import { RegexType } from '@shared/types';
import { escapeForRegex } from '@shared/utils/escape-for-regex';

export const specialCharactersAllowed: string = '(@$!#*?&_/+-=.,)';
// 1 Only password valid characters
export const REGEX_PASSWORD: RegExp = new RegExp(`^[A-Za-z0-9${escapeForRegex(specialCharactersAllowed)}]+$`);

// 2 Only digits (for document fields)
const REGEX_NUMERIC = /^[0-9]$/;

// 3 Names:
// - Allows letters (Unicode), ()., and spaces
// - Disallows tabs, newlines, and other control whitespace
const REGEX_NAME = /^[\p{L}()., ]$/u;

// 4 Description:
// - Allows letters (Unicode), numbers, (),._,&; and spaces
// - Disallows tabs, newlines, and other control whitespace
const REGEX_DESCRIPTION = /^[\p{L}0-9()._,&; ]$/u;

// 5 Date in dd/mm/yyyy
const REGEX_DATE_DDMMYYYY = REGEX_NUMERIC;

/**
 * Blocks invalid characters for password, document, or name fields.
 */
export function blockInvalidChars(event: KeyboardEvent, regexType: RegexType): void {
  const { key } = event;

  if (['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(key)) {
    return;
  }

  switch (regexType) {
    case 'password':
      if (!REGEX_PASSWORD.test(key)) event.preventDefault();
      break;

    case 'document':
      if (!REGEX_NUMERIC.test(key)) event.preventDefault();
      break;

    case 'name':
      if (!REGEX_NAME.test(key)) event.preventDefault();
      break;

    case 'description':
      if (!REGEX_DESCRIPTION.test(key)) event.preventDefault();
      break;
    case 'date':
      if (!REGEX_DATE_DDMMYYYY.test(key)) event.preventDefault();
      break;
    case 'none':
    default:
      break;
  }
}
