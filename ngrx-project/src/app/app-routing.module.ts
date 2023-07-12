import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const childRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard], // Agregar la guarda de ruta aquí
    loadChildren: async (): Promise<any> =>
      (await import('./home/home.module')).HomeModule,
  },
  {
    path: 'login',
    component: LoginComponent,
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
