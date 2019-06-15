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
    this.loginVerified();
  }

  loginVerified() {
    if(localStorage.getItem('isLogin') !== null) {
      this.statusLogin = true;
      this.name        = JSON.parse(localStorage.getItem('isLogin'));
    }
  }

  login(_username:string, _password:string) {
      if(_username === 'm' && _password === 'm') {
        this.statusLogin = true;
        this.name = _username;
        this.setLocalStorage();
      }
  }

  setLocalStorage() {
    localStorage.setItem('isLogin', JSON.stringify(this.name));
  }

}
