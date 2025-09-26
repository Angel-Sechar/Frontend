import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from '@shared/components';
import { ItemForm } from '@shared/models';

@Component({
  selector: 'shared-form-child',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './form-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormChildComponent {
  formGroup = input.required<FormGroup<ItemForm>>();
}
