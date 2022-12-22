import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CourseEffects } from './course.effects';
import { courseFeatureKey, reducer } from './course.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(courseFeatureKey, reducer),
    EffectsModule.forFeature([CourseEffects]),
  ],
})
export class CourseModule {}
