import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {


  public data = this.lstData();

  constructor() { }

  ngOnInit() {
  }

  public lstData() {
    return [
      {tenSP: "iPhone X", gia: 20000},
      {tenSP: "iPhone X", gia: 20000},
      {tenSP: "iPhone X", gia: 20000},
      {tenSP: "iPhone X", gia: 20000},
    ];
  }

}
