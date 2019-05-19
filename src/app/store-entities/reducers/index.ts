import { Task } from 'src/app/interfaces/task';
import * as fromNewTask from './new-task.reducer';

export const reducers = {
  newTask: fromNewTask.reducer
};

export interface TimeTrackingState {
    tasks: Task[];
  }