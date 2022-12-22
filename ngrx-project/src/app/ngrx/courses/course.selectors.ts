import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { ICourse } from 'src/app/model/dto';
import { MyAppState } from '../state.interface';
import { courseFeatureKey, CoursesState } from './course.reducer';

export const selectFeature: MemoizedSelector<object, CoursesState> =
  createFeatureSelector<CoursesState>(courseFeatureKey);

const selectCourses: MemoizedSelector<MyAppState, ICourse[]> = createSelector(
  selectFeature,
  ({ entities }) => entities
);

export const courseSelectors = {
  selectCourses,
};
