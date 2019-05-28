import { Task } from 'src/app/interfaces/task';
import * as fromNewTask from './task.reducers';
import * as fromSelectors from '../selectors/selectors';

export const reducers = {
  newTask: fromNewTask.reducer
};

export interface TimeTrackingState {
  activeTaskId: number;
  tasks: Task[];
}

export const selectors = {
  getTasks: fromSelectors.getTasks,
  getActiveTaskId: fromSelectors.getActiveTaskId
};
