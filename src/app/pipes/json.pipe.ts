import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'json',
  standalone: true,
})
export class JsonPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return JSON.stringify(value, null, 2);
  }
}
