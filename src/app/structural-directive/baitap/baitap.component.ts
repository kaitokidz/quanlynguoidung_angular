import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap',
  templateUrl: './baitap.component.html',
  styleUrls: ['./baitap.component.scss']
})
export class BaitapComponent implements OnInit {

  public name: string;
  public password: string;
  public statusLogin: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  login(_username:string, _password:string) {
      if(_username === 'minh' && _password === 'minh') {
        this.statusLogin = true;
        this.name = _username;
      }
  }

}
