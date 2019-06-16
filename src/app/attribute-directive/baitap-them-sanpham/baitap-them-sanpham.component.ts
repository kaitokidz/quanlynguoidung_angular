import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-them-sanpham',
  templateUrl: './baitap-them-sanpham.component.html',
  styleUrls: ['./baitap-them-sanpham.component.scss']
})
export class BaitapThemSanphamComponent implements OnInit {

  public productNo:string;
  public productName:string;
  public productPrice:string;
  public lstProduct:any = [];


  constructor() { }

  ngOnInit() {
    this.getLocalData();
  }

  getLocalData() {
    let data = localStorage.getItem('lstProduct');
    if(data !== null) {
      this.lstProduct = JSON.parse(data);
    }
  }

  addProduct(no:string, name:string, price:string) {
    let obj = {
      productNo: no,
      productName: name,
      productPrice: price,
    }

    this.lstProduct.push(obj);    
    localStorage.setItem('lstProduct', JSON.stringify(this.lstProduct));
  }

}
