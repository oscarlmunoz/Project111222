import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ICourse } from '../../model/dto';
import { LoadingStatus } from '../../model/local-enums';
import { coursesActions } from './course.actions';

export const courseFeatureKey = 'courses';

export interface CoursesState {
  error?: string;
  status: LoadingStatus;

  entities: ICourse[];
}

export const adapter: EntityAdapter<ICourse> = createEntityAdapter<ICourse>({
  selectId: (item) => item.Id,
});

export const initialState: CoursesState = adapter.getInitialState({
  status: LoadingStatus.Ready,
  entities: [],
});

export const reducer = createReducer(
  initialState,

  on(coursesActions.requestCoursesList, (state, _): CoursesState => {
    return {
      ...state,
      entities: [],
      status: LoadingStatus.Loading,
    };
  }),

  on(coursesActions.loadCoursesList, (state, payload): CoursesState => {
    return {
      ...state,
      entities: payload.courseList ?? [],
      status: LoadingStatus.Completed,
    };
  }),

  on(coursesActions.requestCoursesListError, (state, payload): CoursesState => {
    return {
      ...state,
      error: payload.error,
    };
  })
);
