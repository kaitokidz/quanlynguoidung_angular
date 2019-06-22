import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  

  public danhSachPhim = [
    {maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh:"./assets/images/minions.jpg"},
    {maPhim: 2, tenPhim: "Home", gia: "3000", hinhAnh:"./assets/images/home.jpg"},
    {maPhim: 3, tenPhim: "Harvie", gia: "1000", hinhAnh:"./assets/images/harvie.jpg"},
    {maPhim: 4, tenPhim: "Insideout", gia: "6000", hinhAnh:"./assets/images/insideout.jpg"},
  ];

  public danhSachLike = [
    {maPhim: 1, tenPhim: "Minions", soLike: 0},
    {maPhim: 2, tenPhim: "Home", soLike: 0},
    {maPhim: 3, tenPhim: "Harvie", soLike: 0},
    {maPhim: 4, tenPhim: "Insideout", soLike: 0},
  ];

  constructor() { }

  ngOnInit() {
  }

  public dsPhimLike(_phim: any) {
    
    let film = this.danhSachLike.find(function (film){
      return _phim.maPhim === film.maPhim
    }); 
    
    film.soLike++;    
  }


  public themPhim(_phim : any) {
    this.danhSachPhim.push(_phim);
  }
}
