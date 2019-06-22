import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { OnewayBindingComponent } from './data-binding/oneway-binding/oneway-binding.component';
import { QuanlyNguoidungComponent } from './quanly-nguoidung/quanly-nguoidung.component';
import { TwowayBindingComponent } from './data-binding/twoway-binding/twoway-binding.component';
import { BaiTapDataBindingComponent } from './bai-tap-data-binding/bai-tap-data-binding.component';
import {StructuralDirectiveModule} from './structural-directive/structural-directive.module';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
import { NgContentModule } from './ng-content/ng-content.module';
import { InteractionModule } from './interaction/interaction.module';
import { BaitapInteractionModule } from './baitap-interaction/baitap-interaction.module';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    OnewayBindingComponent,
    QuanlyNguoidungComponent,
    TwowayBindingComponent,
    BaiTapDataBindingComponent,
  ],
  exports: [
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    NgContentModule,
    InteractionModule,
    BaitapInteractionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
