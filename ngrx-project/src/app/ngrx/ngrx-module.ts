import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CourseModule } from './courses/course.module';

@NgModule({
  imports: [EffectsModule.forRoot([]), CourseModule],
})
export class NGRXModule {}
