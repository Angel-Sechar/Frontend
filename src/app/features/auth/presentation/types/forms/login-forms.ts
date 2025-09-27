import { FormControl } from '@angular/forms';

export interface LoginForm {
  id: FormControl<number>;
  email: FormControl<string>;
  password: FormControl<string>;
}
