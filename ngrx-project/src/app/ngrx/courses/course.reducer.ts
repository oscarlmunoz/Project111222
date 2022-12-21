import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';
import { ICourse } from '../../model/dto';
import { LoadingStatus } from '../../model/local-enums';

export const courseFeatureKey = 'courses';

export interface CoursesState {
  error?: string;
  status: LoadingStatus;

  courses: ICourse[];
}

export const adapter: EntityAdapter<ICourse> = createEntityAdapter<ICourse>({
  selectId: (item) => item.Id,
});

export const initialState: CoursesState = adapter.getInitialState({
  status: LoadingStatus.Ready,
  courses: [],
});

export const reducer = createReducer(initialState);
