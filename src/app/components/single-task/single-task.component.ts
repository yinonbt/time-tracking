import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { Store } from '@ngrx/store';
import * as fromReducers from '../../store-entities/reducers';
import { ToggleTaskAction } from 'src/app/store-entities/actions/new-task.actions';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {
  @Input() task: Task;
  
  constructor(private store: Store<fromReducers.TimeTrackingState>) { }

  ngOnInit() {
  }

  toggleTask() {
    this.store.dispatch(new ToggleTaskAction(this.task.id));
  }

}
