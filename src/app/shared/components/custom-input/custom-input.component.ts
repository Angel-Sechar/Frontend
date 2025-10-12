import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  forwardRef,
  inject,
  input,
  OnInit,
  output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateAutoformatDirective, NoPasteDirective } from '@shared/directives';
import { blockInvalidChars, specialCharactersAllowed } from '@shared/helpers/regex-form.helper';
import { RegexType } from '@shared/types';

// #region Helper Functions
function hasRequiredValidator(control: FormControl): boolean {
  if (!control.validator) {
    return false;
  }

  const validatorResult = control.validator(control);
  return !!(validatorResult && validatorResult['required']);
}
// #endregion

@Component({
  selector: 'shared-custom-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NoPasteDirective,
    MatDatepickerModule,
    DateAutoformatDirective,
  ],
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
export class CustomInputComponent implements ControlValueAccessor, OnInit {
  // #region Inputs
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

  specialCharacters: string = specialCharactersAllowed;

  private uniqueSuffix = Math.random().toString(36).substring(2, 9);

  regexValidator = input<RegexType>('none');

  noPaste = input<boolean>(false);

  pasteAttempted = output<void>();

  private snackbar = inject(MatSnackBar);

  maxDate = input<Date>(new Date());

  minDate = input<Date>(
    (() => {
      const today = new Date();
      return new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
    })(),
  );
  // #endregion

  // #region Methods
  ngOnInit(): void {
    this.control()
      .valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.onChange(value));
  }

  blockInvalidCharsForm = blockInvalidChars;

  // eslint-disable-next-line class-methods-use-this
  onTouched = () => {};

  // eslint-disable-next-line class-methods-use-this
  onChange = (_value: any) => {};

  writeValue(value: any): void {
    if (value !== this.control().value) {
      this.control().setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
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

  onPasteAttempted() {
    if (this.noPaste()) {
      this.snackbar.open('Pegar no está permitido', 'Cerrar', {
        duration: 2000,
        panelClass: ['snackbar-warning'],
      });
    }
  }
  // #endregion
}
