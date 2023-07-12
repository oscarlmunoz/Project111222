import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LoadingStatus } from 'src/app/model/local-enums';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input()
  public status: LoadingStatus;

  protected LoadingStatus = LoadingStatus;
}
