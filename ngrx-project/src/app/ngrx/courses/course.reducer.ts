import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ICourse, ICourseCard, ICourseInfo } from '../../model/dto';
import { LoadingStatus } from '../../model/local-enums';
import { coursesActions } from './course.actions';

export const courseFeatureKey = 'courses';

export interface CoursesState extends EntityState<ICourse> {
  error?: string;
  status: LoadingStatus;

  courseList: ICourseCard[];
  courseInfo?: ICourseInfo;
}

export const adapter: EntityAdapter<ICourse> = createEntityAdapter<ICourse>({
  selectId: (item) => item.Id,
});

export const initialState: CoursesState = adapter.getInitialState({
  status: LoadingStatus.Ready,
  courseList: [],
});

export const reducer = createReducer(
  initialState,

  on(coursesActions.requestCoursesList, (state, _): CoursesState => {
    return {
      ...state,
      courseList: [],
      status: LoadingStatus.Loading,
    };
  }),

  on(coursesActions.loadCoursesList, (state, payload): CoursesState => {
    return {
      ...state,
      courseList: payload.courseList ?? [],
      status: LoadingStatus.Completed,
    };
  }),

  on(coursesActions.requestCoursesListError, (state, payload): CoursesState => {
    return {
      ...state,
      error: payload.error,
      status: LoadingStatus.Errored,
    };
  }),

  on(coursesActions.requestCourseInfo, (state, _): CoursesState => {
    return {
      ...state,
      courseInfo: undefined,
      status: LoadingStatus.Loading,
    };
  }),

  on(coursesActions.loadCourseInfo, (state, payload): CoursesState => {
    return {
      ...state,
      courseInfo: payload.courseInfo ?? undefined,
      status: LoadingStatus.Completed,
    };
  }),

  on(coursesActions.requestCourseInfoError, (state, payload): CoursesState => {
    return {
      ...state,
      status: LoadingStatus.Errored,
      error: payload.error,
    };
  })
);
