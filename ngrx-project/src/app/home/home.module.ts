import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomePreloadGuard } from './home-preload.guard';
import { HomeComponent } from './home.component';

const declarations = [HomeComponent];

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
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
