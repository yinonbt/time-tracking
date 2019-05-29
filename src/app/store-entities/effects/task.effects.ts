import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { interval } from 'rxjs';
import { ProgressTaskAction } from '../actions/task.actions';
import { map } from 'rxjs/operators';


@Injectable()
export class TaskEffects {
  @Effect()
  interval$ = interval(1000).pipe(map(data => new ProgressTaskAction(null)));


  constructor(private actions$: Actions) {}

}
