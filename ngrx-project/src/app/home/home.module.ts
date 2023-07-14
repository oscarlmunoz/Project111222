import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { HomePreloadGuard } from './home-preload.guard';
import { HomeComponent } from './home.component';

const declarations = [HomeComponent, CourseCardComponent];

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [HomePreloadGuard],
  },
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations,
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatCardModule,
  ],
})
export class HomeModule {}
