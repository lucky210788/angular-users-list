import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appClick]'
})

export class ClickDirective {
  constructor(private elem: ElementRef) {
  }

  changecolor(colorname: string): void {
    this.elem.nativeElement.style.color = colorname;
  }

  @HostListener('click') clicked() {
    this.changecolor('#25DE16');
  }
}
