import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-data-binding',
  templateUrl: './bai-tap-data-binding.component.html',
  styleUrls: ['./bai-tap-data-binding.component.scss']
})
export class BaiTapDataBindingComponent implements OnInit {

  public email:string    = "minhchieng@gmail.com";
  public fullName:string = "Minh Chieng";

  constructor() { }

  ngOnInit() {
  }

  eventBinding(event:string) {
    this.fullName = event;
  }

}
