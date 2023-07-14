import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { CourseInfoComponent } from './course-info.component';

export const routes: Routes = [
  {
    path: ':courseId',
    component: CourseInfoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [CourseInfoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CourseInfoModule {}
