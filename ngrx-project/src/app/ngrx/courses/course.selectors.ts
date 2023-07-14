import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { ICourseCard, ICourseInfo } from 'src/app/model/dto';
import { LoadingStatus } from 'src/app/model/local-enums';
import { MyAppState } from '../state.interface';
import { courseFeatureKey, CoursesState } from './course.reducer';

export const selectFeature: MemoizedSelector<object, CoursesState> =
  createFeatureSelector<CoursesState>(courseFeatureKey);

const selectCourses: MemoizedSelector<MyAppState, ICourseCard[]> =
  createSelector(selectFeature, ({ courseList }) => courseList);

const selectStatus: MemoizedSelector<MyAppState, LoadingStatus> =
  createSelector(selectFeature, ({ status }) => status);

const selectCourseInfo: MemoizedSelector<MyAppState, ICourseInfo | undefined> =
  createSelector(selectFeature, ({ courseInfo }) => courseInfo);

export const courseSelectors = {
  selectCourses,
  selectStatus,
  selectCourseInfo,
};
