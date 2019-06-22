import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {

  @Input() Ghe;

  public trangThaiChon = false;

  constructor() { }

  ngOnInit() {
  }

  chonGhe(){
    this.trangThaiChon = true;
  }

}
