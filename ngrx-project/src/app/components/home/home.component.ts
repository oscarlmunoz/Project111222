import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/model/dto';
import { courseSelectors } from 'src/app/ngrx/courses/course.selectors';
import { MyAppState } from 'src/app/ngrx/state.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public courseList: Observable<ICourse[]>;

  public ngOnInit(): void {
    this.courseList = this.store.pipe(select(courseSelectors.selectCourses));
  }

  constructor(private store: Store<MyAppState>) {}
}
