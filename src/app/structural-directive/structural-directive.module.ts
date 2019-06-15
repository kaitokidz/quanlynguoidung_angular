import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StructuralDirectiveComponent
  ]
})
export class StructuralDirectiveModule { }
