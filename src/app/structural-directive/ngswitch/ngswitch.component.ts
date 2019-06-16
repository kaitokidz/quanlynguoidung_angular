import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {

  public dkSwitch:string = 'red';

  constructor() { }

  ngOnInit() {
  } 

  // Nếu xử lý bên html thì không cân hàm này
  // changeColor(value:string) {
  //   this.dkSwitch = value;
  // }

}
