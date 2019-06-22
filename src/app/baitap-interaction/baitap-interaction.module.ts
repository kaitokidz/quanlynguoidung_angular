import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapInteractionComponent } from './baitap-interaction.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './danh-sach-ghe/ghe/ghe.component';

@NgModule({
  declarations: [BaitapInteractionComponent, DanhSachGheComponent, GheComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BaitapInteractionComponent
  ],
})
export class BaitapInteractionModule { }
