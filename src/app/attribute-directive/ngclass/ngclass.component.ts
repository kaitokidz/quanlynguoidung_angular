import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {

  mauChu:boolean  = true;
  fontChu:boolean = true;
  public bgColor:string = 'orange';
  public colorText:string = 'white';
  public name:string = "Minh";
  constructor() { }

  ngOnInit() {
  }

}
