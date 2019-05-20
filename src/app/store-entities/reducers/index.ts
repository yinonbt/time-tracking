import { Task } from 'src/app/interfaces/task';
import * as fromNewTask from './new-task.reducer';
import * as fromSelectors from '../selectors/selectors';

export const reducers = {
  newTask: fromNewTask.reducer
};

export interface TimeTrackingState {
  tasks: Task[];
}

export const selectors = {
  getTasks: fromSelectors.getTasks
};
