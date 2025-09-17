import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[SharedHighlightDirective]',
})
export class SharedHighlightDirective {
  private elem = inject(ElementRef);

  private renderer = inject(Renderer2);

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.elem.nativeElement, 'background-color');
  }
}
