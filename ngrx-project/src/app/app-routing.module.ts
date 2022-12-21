import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main/main.component';

const childRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
