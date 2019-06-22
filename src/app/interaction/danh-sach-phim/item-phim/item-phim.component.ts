import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {

  @Input() film : any;


  constructor() { }

  ngOnInit() {
  }

  public like() {
    console.log("ok");
    
  }

}
