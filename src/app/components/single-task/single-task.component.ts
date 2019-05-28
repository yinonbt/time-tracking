import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { Store } from '@ngrx/store';
import * as fromReducers from '../../store-entities/reducers';
import { ToggleTaskAction } from 'src/app/store-entities/actions/task.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {
  @Input() task: Task;
  
  activeTaskId$: Observable<number>;
  
  constructor(private store: Store<fromReducers.TimeTrackingState>) { }

  ngOnInit() {
    this.activeTaskId$ = this.store.select(fromReducers.selectors.getActiveTaskId);
  }

  toggleTask() {
    this.store.dispatch(new ToggleTaskAction(this.task.id));
  }

}
