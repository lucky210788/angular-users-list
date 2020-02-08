import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})

export class HoverDirective {
  @HostBinding('class.on-hover') isHover = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHover = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHover = false;
  }
}
