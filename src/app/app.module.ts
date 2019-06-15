import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './oneway/data-binding/data-binding.component';
import { OnewayBindingComponent } from './oneway/data-binding/oneway-binding/oneway-binding.component';
import { OnewayComponent } from './oneway/oneway.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    OnewayBindingComponent,
    OnewayComponent,
  ],
  exports: [
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
