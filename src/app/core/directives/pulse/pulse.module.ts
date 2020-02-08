import {NgModule} from '@angular/core';
import {PulseDirective} from './pulse.directive';

@NgModule({
  declarations: [PulseDirective],
  exports: [PulseDirective]
})

export class PulseModule {
}
