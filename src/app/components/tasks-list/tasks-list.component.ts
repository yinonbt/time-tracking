import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from 'src/app/interfaces/task';
import { Store } from '@ngrx/store';
import * as fromReducers from '../../store-entities/reducers';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit, OnDestroy {
  
  tasks$: Observable<Task[]>;

  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(private store: Store<fromReducers.TimeTrackingState>) {
    // this.tasks$ = store.select(fromReducers.selectors.getTasks);
  }

  ngOnInit() {
    this.tasks$ = this.store.select(fromReducers.selectors.getTasks);
    this.tasks$.takeUntil(this.destroy$).subscribe(tasks => {
      //console.log('tasks updated: ', tasks);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);

    this.destroy$.unsubscribe();
  }
}
