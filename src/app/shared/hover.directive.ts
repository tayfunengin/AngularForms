import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: '[hover]'
})

export default class HoverDirective{

  @HostBinding('style.opacity') opacity: number;

 
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.opacity = 0.8;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.opacity = 1;
  }

}