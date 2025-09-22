import { ChangeDetectionStrategy, Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'shared-email-link',
  standalone: true,
  imports: [],
  templateUrl: './email-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailLinkComponent {
  email: InputSignal<string> = input.required<string>();
}
