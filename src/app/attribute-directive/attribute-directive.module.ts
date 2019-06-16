import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { BaitapThemSanphamComponent } from './baitap-them-sanpham/baitap-them-sanpham.component';

@NgModule({
  declarations: [AttributeDirectiveComponent, NgclassComponent, BaitapThemSanphamComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AttributeDirectiveComponent,
  ]
})
export class AttributeDirectiveModule { }
