import { ChangeDetectionStrategy, Component, InputSignal, inject, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { HorizontalPositionType } from '@shared/types';

@Component({
  selector: 'shared-button-navigate',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './button-navigate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonNavigateComponent {
  router = inject(Router);

  navigateLabel: InputSignal<string> = input<string>('INICIO');

  route: InputSignal<string> = input<string>('/home');

  position: InputSignal<HorizontalPositionType> = input<HorizontalPositionType>('left');

  navigate = output<string>();

  onNavigateTo(): void {
    this.navigate.emit(this.route());
  }
}
