/**
 * Escapes special regex characters inside the given string so it can be safely
 * used inside a regular expression character class.
 *
 * For example:
 *   escapeForRegex("a-z+") → "a\-z\+"
 *
 * This is useful when dynamically constructing regex patterns from user-defined
 * or externally-defined sets of characters.
 *
 * @param chars The raw string containing characters to escape.
 * @returns A new string safe to inject inside a RegExp.
 */
export function escapeForRegex(chars: string): string {
  return chars.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
