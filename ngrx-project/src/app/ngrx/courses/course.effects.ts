import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, catchError, map, mergeMap } from 'rxjs';
import { ICourseCard, ICourseInfo } from 'src/app/model/dto';
import { MyAppService } from '../../services/my-app.service';
import { MyAppState } from '../state.interface';
import { coursesActions } from './course.actions';

@Injectable()
export class CourseEffects {
  public requestCoursesList: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(coursesActions.requestCoursesList),
      mergeMap(() => {
        return this.myAppService.courseService.getCourseSummaryList().pipe(
          map((result: ICourseCard[]) =>
            coursesActions.loadCoursesList({
              courseList: result ?? undefined,
            })
          ),
          catchError((error) => {
            return [coursesActions.requestCoursesListError({ error })];
          })
        );
      })
    );
  });

  public requestCourseInfo: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(coursesActions.requestCourseInfo),
      mergeMap((action): Observable<Action> => {
        return this.myAppService.courseService
          .getCourseInfo(action.courseId)
          .pipe(
            map((courseInfo: ICourseInfo | undefined) =>
              coursesActions.loadCourseInfo({
                courseInfo: courseInfo,
              })
            ),
            catchError((error) => {
              return [coursesActions.requestCourseInfoError({ error })];
            })
          );
      })
    );
  });

  constructor(
    private store: Store<MyAppState>,
    private myAppService: MyAppService,
    private actions: Actions
  ) {}
}
