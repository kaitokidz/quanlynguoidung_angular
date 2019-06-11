import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NhanvienModule {
  
    public taiKhoan: string;
    public matKhau: string;
    public hoTen: string;
    public email: string;
    public soDienThoai: string;


    constructor(_taiKhoan: string, _matKhau: string, _hoTen: string, _email: string, _soDienThoai: string) {
      this.taiKhoan = _taiKhoan;
      this.matKhau = _matKhau;
      this.hoTen = _hoTen;
      this.email = _email;
      this.soDienThoai = _soDienThoai;
    }
 }
