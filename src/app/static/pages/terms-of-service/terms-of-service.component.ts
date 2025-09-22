import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmailLinkComponent } from '@app/shared/components/email-link/email-link.component';
import { environment } from '@env/environment';

@Component({
  selector: 'static-terms-of-service',
  standalone: true,
  imports: [EmailLinkComponent],
  templateUrl: './terms-of-service.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsOfServiceComponent {
  appName: string = environment.appName;

  supportEmail: string = environment.supportEmail;

  lastUpdated: string = environment.lastUpdated;
}
