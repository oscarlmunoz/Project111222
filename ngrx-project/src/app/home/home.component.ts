import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/model/dto';
import { courseSelectors } from 'src/app/ngrx/courses/course.selectors';
import { MyAppState } from 'src/app/ngrx/state.interface';
import { LoadingStatus } from '../model/local-enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public courseList: Observable<ICourse[]>;
  public courseListStatus: Observable<LoadingStatus>;

  public LoadingStatus = LoadingStatus;

  public ngOnInit(): void {
    this.courseList = this.store.pipe(select(courseSelectors.selectCourses));
    this.courseListStatus = this.store.pipe(
      select(courseSelectors.selectStatus)
    );
  }

  constructor(private store: Store<MyAppState>) {}
}
