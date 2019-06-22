import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachPhimComponent} from './danh-sach-phim/danh-sach-phim.component';


@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @ViewChild(DanhSachPhimComponent, {static : false}) domListPhim : DanhSachPhimComponent;

  constructor() { }

  ngOnInit() {
  }

  public insertFilm(_maPhim:string, _tenPhim:string, _giaPhim:string, _hinhPhim:string) {
     const obj = {
      maPhim: _maPhim,
      tenPhim:_tenPhim,
      gia: _giaPhim,
      hinhAnh: _hinhPhim
    }
    this.domListPhim.themPhim(obj);
  }



}
