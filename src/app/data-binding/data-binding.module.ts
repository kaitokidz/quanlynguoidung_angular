import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TwowayBindingComponent } from '../oneway/data-binding/twoway-binding/twoway-binding.component';
@NgModule({
  declarations: [
    TwowayBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
  ],
  exports: [
    TwowayBindingComponent,
  ],
})
export class DataBindingModule { }
