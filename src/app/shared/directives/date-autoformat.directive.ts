import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import moment from 'moment';

@Directive({
  selector: 'input[dateAutoformat]',
  standalone: true,
})
export class DateAutoformatDirective {
  private el = inject(ElementRef);

  private control = inject(NgControl, { optional: true });

  @HostListener('input', ['$event'])
  onInput(event: InputEvent): void {
    const input = event.target as HTMLInputElement;

    const digits = input.value.replace(/\D/g, '').substring(0, 8);

    // Format: DD/MM/YYYY
    let formatted = '';
    if (digits.length > 0) {
      formatted = digits.substring(0, 2);
      if (digits.length >= 3) {
        formatted += `/${digits.substring(2, 4)}`;
      }
      if (digits.length >= 5) {
        formatted += `/${digits.substring(4, 8)}`;
      }
    }

    input.value = formatted;

    // If complete, parse to moment
    if (digits.length === 8 && this.control?.control) {
      const momentDate = moment(digits, 'DD/MM/YYYY', true);
      if (momentDate.isValid()) {
        this.control.control.setValue(momentDate, { emitEvent: false });
      }
    }
  }
}
