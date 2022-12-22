import { courseFeatureKey, CoursesState } from './courses/course.reducer';

export interface MyAppState {
  [courseFeatureKey]: CoursesState;
}
