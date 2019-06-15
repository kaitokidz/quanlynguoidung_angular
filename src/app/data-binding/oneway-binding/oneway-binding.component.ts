import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {

  public name:string = "Minh Chieng"

  constructor() { }

  ngOnInit() {
  }

  eventBinding(value) {
    console.log(value );
    
  }

}
