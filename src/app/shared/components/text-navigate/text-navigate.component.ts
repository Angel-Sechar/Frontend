import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'shared-text-navigate',
  standalone: true,
  imports: [],
  templateUrl: './text-navigate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextNavigateComponent {
  text = input.required();

  route = input.required();
}
