import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmailLinkComponent } from '@app/shared/components/email-link/email-link.component';
import { environment } from '@env/environment';

@Component({
  selector: 'static-privacy-policy',
  standalone: true,
  imports: [EmailLinkComponent],
  templateUrl: './privacy-policy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {
  appName: string = environment.appName;

  supportEmail: string = environment.supportEmail;

  lastUpdated: string = environment.lastUpdated;
}
