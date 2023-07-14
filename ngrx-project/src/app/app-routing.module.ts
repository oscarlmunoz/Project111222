import { NgModule, Type } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CourseInfoModule } from './course-info/course-info.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const childRoutes: Routes = [
  {
    path: '',
    loadChildren: async (): Promise<Type<HomeModule>> =>
      (await import('./home/home.module')).HomeModule,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'course-info',
    loadChildren: async (): Promise<Type<CourseInfoModule>> =>
      (await import('./course-info/course-info.module')).CourseInfoModule,
  },
];

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: childRoutes,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
