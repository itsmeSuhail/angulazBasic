import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighilight]',
  standalone: true
})
export class HighilightDirective {
 element:ElementRef
  constructor(e:ElementRef) {
    this.element=e;
   }
  @HostBinding("style.backgroundColor")
  bg = "grey"
  @HostListener("mouseenter")
  changeEnter(){
    console.log("enter",this.element)
  }
  @HostListener("mouseleave")
  changeLeave(){
    console.log("leave",this.element)
  }
}
