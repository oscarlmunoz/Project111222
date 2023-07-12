import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';

const declarations = [SpinnerComponent];

const materialModules = [MatProgressSpinnerModule];

@NgModule({
  imports: [...materialModules, CommonModule],
  declarations,
  exports: [...declarations],
  providers: [],
})
export class SharedModule {}
