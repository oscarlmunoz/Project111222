import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { catchError, map, mergeMap, Observable } from 'rxjs';
import { MyAppService } from '../../services/my-app.service';
import { MyAppState } from '../state.interface';
import { coursesActions } from './course.actions';

@Injectable()
export class CourseEffects {
  public requestCoursesList: Observable<Action> = createEffect(() => {
    return this.actions.pipe(
      ofType(coursesActions.requestCoursesList),
      mergeMap(() => {
        return this.myAppService.courseService.getCoursesList().pipe(
          map((result) =>
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

  constructor(
    private store: Store<MyAppState>,
    private myAppService: MyAppService,
    private actions: Actions
  ) {}
}
