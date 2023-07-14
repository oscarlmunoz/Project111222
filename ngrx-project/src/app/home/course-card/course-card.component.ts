import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ICourseCard } from 'src/app/model/dto';
import { CourseLevel } from 'src/app/model/local-enums';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent implements OnChanges {
  @Input() public course: ICourseCard;

  @Output() public openCourseInfo: EventEmitter<string> = new EventEmitter();
  protected levelText: string;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      this.levelText = CourseLevel[this.course.Level];
    }
  }
}
