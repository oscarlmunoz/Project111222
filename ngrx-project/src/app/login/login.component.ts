import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Input() public error: string | null;

  @Output() public submitEM = new EventEmitter();

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public submit(): void {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
}
