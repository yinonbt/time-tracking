import { Time } from '@angular/common';
import { Task } from './interfaces/task';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromReducers from './store-entities/reducers';
import { NewTaskAction } from './store-entities/actions/new-task.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-tracking';

  tasks$: Observable<Task[]>;

  newTaskFormGroup = this.formBuilder.group({
    formControlTitle: [null]
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromReducers.TimeTrackingState>
  ) {}

  dispatchNewTask() {
    const newTaskTitle: string = this.newTaskFormGroup.get('formControlTitle')
      .value;
    this.newTaskFormGroup.reset();    
    this.store.dispatch(new NewTaskAction(newTaskTitle));
  }
}
