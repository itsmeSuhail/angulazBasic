import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fomat',
  standalone: true
})
export class FomatPipe implements PipeTransform {
  /*
  value means value
   arges means jo kuch arguments dena chahe rhe hai ham
   */
  transform(value: string, ...args: unknown[]): string {
    console.log(args)
    return value.toUpperCase();
  }

}
