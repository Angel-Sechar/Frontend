import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconService } from '@core/services/icon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  private iconService = inject(IconService);
}
