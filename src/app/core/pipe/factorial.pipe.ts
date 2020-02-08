import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appFactorial'
})

export class FactorialPipe implements PipeTransform {
  transform(value: number) {
    if (value <= 0) return 0;

    let result = 1;
    for (let i = 1; i <= value; i++) {
      result = result * i;
    }
    return result;
  }
}
