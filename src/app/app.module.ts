import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DanhsachNhanvienComponent } from './danhsach-nhanvien/danhsach-nhanvien.component';

@NgModule({
  declarations: [
    AppComponent,
    DanhsachNhanvienComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
