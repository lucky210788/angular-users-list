import {NgModule} from '@angular/core';
import {PowPipe} from '../../core/pipe/pow.pipe';
import {MainComponent} from './main.component';
import {NumToStringPipe} from '../../core/pipe/numToString.pipe';
import {FactorialPipe} from '../../core/pipe/factorial.pipe';
import {CommonModule} from '@angular/common';
import {ColorModule} from '../../core/directives/color/color.module';
import {HoverModule} from '../../core/directives/hover/hover.module';
import {ClickModule} from '../../core/directives/click/click.module';
import {DelayModule} from '../../core/directives/delay/delay.module';
import {LoopModule} from '../../core/directives/loop/loop.module';
import {PulseModule} from '../../core/directives/pulse/pulse.module';

@NgModule({
  declarations: [
    MainComponent,
    PowPipe,
    NumToStringPipe,
    FactorialPipe
  ],
  imports: [
    CommonModule,
    ColorModule,
    HoverModule,
    ClickModule,
    DelayModule,
    LoopModule,
    PulseModule
  ],
  exports: [MainComponent]
})
export class MainModule {
}
