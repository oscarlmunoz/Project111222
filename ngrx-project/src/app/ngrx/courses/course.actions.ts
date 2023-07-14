import { createAction, props } from '@ngrx/store';
import { ICourseCard, ICourseInfo } from 'src/app/model/dto';

const requestCoursesList = createAction('[Courses] requestCoursesList');
const loadCoursesList = createAction(
  '[Courses] loadCoursesList',
  props<{ courseList: ICourseCard[] | undefined }>()
);
const requestCoursesListError = createAction(
  '[Courses] requestCoursesListError',
  props<{ error: string }>()
);

const requestCourseInfo = createAction(
  '[Courses] requestCourseInfo',
  props<{ courseId: string | undefined }>()
);
const loadCourseInfo = createAction(
  '[Courses] loadCourseInfo',
  props<{ courseInfo: ICourseInfo | undefined }>()
);
const requestCourseInfoError = createAction(
  '[Courses] requestCourseInfoError',
  props<{ error: string }>()
);

export const coursesActions = {
  requestCoursesList,
  loadCoursesList,
  requestCoursesListError,
  requestCourseInfo,
  loadCourseInfo,
  requestCourseInfoError,
};
