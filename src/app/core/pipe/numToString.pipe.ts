import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appNumToString'
})

export class NumToStringPipe implements PipeTransform {
  transform(value: number) {
    return +value;
  }
}
