import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { BaitapComponent } from './baitap/baitap.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, BaitapComponent, NgswitchComponent, NgforComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StructuralDirectiveComponent
  ]
})
export class StructuralDirectiveModule { }
