import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingStatus } from '../model/local-enums';
import { coursesActions } from '../ngrx/courses/course.actions';
import { courseSelectors } from '../ngrx/courses/course.selectors';
import { MyAppState } from '../ngrx/state.interface';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseInfoComponent implements OnInit, AfterViewInit {
  protected courseInfo = this.store.pipe(
    select(courseSelectors.selectCourseInfo)
  );

  protected loadingStatus: Observable<LoadingStatus>;
  protected LoadingStatus = LoadingStatus;

  private getCourseId(route: ActivatedRouteSnapshot): string {
    return route.params['courseId'];
  }

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    const courseId = this.getCourseId(this.route.snapshot);
    this.loadingStatus = this.store.pipe(select(courseSelectors.selectStatus));
    this.store.dispatch(coursesActions.requestCourseInfo({ courseId }));
  }

  constructor(
    private store: Store<MyAppState>,
    private route: ActivatedRoute
  ) {}
}
