import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  forwardRef,
  inject,
  input,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatError } from '@angular/material/form-field';

function hasRequiredValidator(control: FormControl): boolean {
  if (!control.validator) {
    return false;
  }

  const validatorResult = control.validator(control);
  return !!(validatorResult && validatorResult['required']);
}

@Component({
  selector: 'shared-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule, MatError],
  templateUrl: './custom-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent implements ControlValueAccessor {
  private destroyRef = inject(DestroyRef);

  control = input.required<FormControl<any>>();

  label = input<string>('');

  callerName = input.required<string>();

  type = input<HTMLInputElement['type']>('text');

  placeholder = input<string>('');

  isRequired = computed(() => hasRequiredValidator(this.control()));

  inputId = computed(() => {
    const caller = this.callerName();

    return `input-${caller.toLowerCase()}-${this.uniqueSuffix}`;
  });

  // eslint-disable-next-line class-methods-use-this
  onTouched = () => {};

  // eslint-disable-next-line class-methods-use-this
  private onChange = (_value: any) => {};

  writeValue(value: any): void {
    if (value !== this.control().value) {
      this.control().setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.control().valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control().disable({ emitEvent: false });
    } else {
      this.control().enable({ emitEvent: false });
    }
  }

  private uniqueSuffix = Math.random().toString(36).substring(2, 9);
}
