import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {

  // True -> show, false -> hidden
  status:boolean = true;

  statusLogin:boolean = true;


  constructor() { }

  ngOnInit() {
  }

  hidden () {
    this.status = false;
  }

  show() {
    this.status = true;
  }

  logout() {
    this.statusLogin = false;
  }

  login() {
    this.statusLogin = true;
  }

}
