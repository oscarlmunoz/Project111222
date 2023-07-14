import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { ICourseCard } from 'src/app/model/dto';
import { coursesActions } from 'src/app/ngrx/courses/course.actions';
import { courseSelectors } from 'src/app/ngrx/courses/course.selectors';
import { MyAppState } from 'src/app/ngrx/state.interface';

@Injectable({ providedIn: 'root' })
export class HomePreloadGuard implements CanActivate {
  constructor(private store: Store<MyAppState>) {}

  public getCoursesList(): void {
    this.store
      // selecting prefetching courses first
      .select(courseSelectors.selectCourses)
      .pipe(take(1))
      .subscribe((data: ICourseCard[] | undefined) => {
        if (!data?.length) {
          this.store.dispatch(coursesActions.requestCoursesList());
        }
      });
  }

  canActivate(): Observable<boolean> {
    this.getCoursesList();
    return of(true);
  }
}
