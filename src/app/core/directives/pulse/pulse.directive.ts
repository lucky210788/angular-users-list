import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {setInterval} from 'timers';

@Directive({
  selector: '[appPulse]'
})

export class PulseDirective implements OnInit {
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {
  }

  ngOnInit() {
    setInterval(() => {
      this.view.createEmbeddedView(this.template);
    }, 3000);
  }
}
