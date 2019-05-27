import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToTime'
})
export class MsToTimePipe implements PipeTransform {
  transform(totalMs: number): string {
    // let time = '';
    // if (typeof totalMs === 'number') {
    //   const ms = totalMs % 1000;
    //   let aggregate = (totalMs - ms) / 1000;
    //   const secs = aggregate % 60;
    //   aggregate = (aggregate - secs) / 60;
    //   const mins = aggregate % 60;
    //   const hrs = (aggregate - mins) / 60;

    //   time = hrs + ':' + mins + ':' + secs + '.' + ms;
    // }
    // return time;
    return new Date(totalMs).toISOString().slice(11, -1);
  }
}
