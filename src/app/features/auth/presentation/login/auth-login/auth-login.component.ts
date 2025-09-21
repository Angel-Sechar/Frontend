import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-login',
  standalone: true,
  imports: [],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginComponent {}
