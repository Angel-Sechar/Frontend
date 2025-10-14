import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { ButtonNavigateComponent } from '@shared/components/button-navigate/button-navigate.component';

@Component({
  selector: 'static-in-building',
  standalone: true,
  imports: [MatIcon, MatCard, ButtonNavigateComponent],
  templateUrl: './in-building.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InBuildingComponent {}
