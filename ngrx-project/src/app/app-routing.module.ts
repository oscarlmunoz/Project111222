import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePreloadGuard } from './components/home/home-preload.guard';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main/main.component';

const childRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [HomePreloadGuard],
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
