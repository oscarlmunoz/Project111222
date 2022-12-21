import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { NGRXModule } from './ngrx/ngrx-module';

@NgModule({
  // allow web components (Angular Material)
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, MainComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MaterialModule,
    NGRXModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
