import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[noPaste]',
  standalone: true,
})
export class NoPasteDirective {
  noPaste = input<boolean>(true);

  pasteAttempted = output<void>();

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    if (this.noPaste()) {
      event.preventDefault();
      this.pasteAttempted.emit();
    }
  }

  @HostListener('keydown.control.v', ['$event'])
  @HostListener('keydown.meta.v', ['$event'])
  onKeyboardPaste(event: KeyboardEvent): void {
    if (this.noPaste()) {
      event.preventDefault();
      this.pasteAttempted.emit();
    }
  }
}
