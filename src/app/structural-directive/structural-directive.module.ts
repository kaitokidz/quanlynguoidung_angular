import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { BaitapComponent } from './baitap/baitap.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, BaitapComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StructuralDirectiveComponent
  ]
})
export class StructuralDirectiveModule { }
