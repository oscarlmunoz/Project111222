import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { courseFeatureKey, reducer } from './course.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(courseFeatureKey, reducer),
    // EffectsModule.forFeature([QuestionnaireEffects]),
  ],
})
export class CourseModule {}
