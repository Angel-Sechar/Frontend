import { REGEX_WHITELIST } from '@shared/validators/password.validator';

export function blockInvalidChars(event: KeyboardEvent) {
  if (!REGEX_WHITELIST.test(event.key)) {
    event.preventDefault();
  }
}
