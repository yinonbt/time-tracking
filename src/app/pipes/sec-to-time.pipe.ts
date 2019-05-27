import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secToTime'
})
export class SecToTimePipe implements PipeTransform {
  transform(sec: number): string {
    const date = new Date(null);
    date.setSeconds(sec); // specify value for SECONDS here
    const timeString = date.toISOString().substr(11, 8);
    return timeString;
  }
}
