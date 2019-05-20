import { Task } from 'src/app/interfaces/task';
import { NewTaskAction } from '../actions/new-task.actions';
import * as newTask from '../actions/new-task.actions';
import { TimeTrackingState } from './index';

export function reducer(
  state: TimeTrackingState = { tasks: [] },
  action: NewTaskAction
) {
  switch (action.type) {
    case newTask.NewTaskActionTypes.CreateNewTask:      
      const newState = {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
      console.log('new task reducer: ', newState);
      return newState;
    default:
      return state;
  }
}
