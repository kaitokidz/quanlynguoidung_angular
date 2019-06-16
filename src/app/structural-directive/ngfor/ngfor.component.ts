import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  public lstUsers:any = [
    {name: 'Nguyen', age:'12'},
    {name: 'Minh', age:'8'},
    {name: 'Thanh', age:'7'},
    {name: 'Hai', age:'42'},
    {name: 'Nam', age:'50'}
  ];

  constructor() { }

  ngOnInit() {
  }

  

}
