import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})

export class HighLightDirective implements OnInit {

  constructor(private ele:ElementRef, private render2:Renderer2) { }

  ngOnInit(): void {
    // this.ele.nativeElement.style.backgroundColor = "Cyan";
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'violet');
  }

  @HostBinding("style.backgroundColor") bgColor:string = 'red';

  @HostListener('mouseenter') MouseHover(eventData:Event) {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'purple');
  }

  @HostListener('mouseleave') MouseLeave(eventData:Event){
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'violet');
  }

}
