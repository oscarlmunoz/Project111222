import { createAction, props } from '@ngrx/store';
import { ICourse } from 'src/app/model/dto';

const requestCoursesList = createAction('[Courses] requestCoursesList');
const loadCoursesList = createAction(
  '[Courses] loadCoursesList',
  props<{ courseList: ICourse[] | undefined }>()
);
const requestCoursesListError = createAction(
  '[Courses] requestCoursesListError',
  props<{ error: string }>()
);

export const coursesActions = {
  requestCoursesList,
  loadCoursesList,
  requestCoursesListError,
};
