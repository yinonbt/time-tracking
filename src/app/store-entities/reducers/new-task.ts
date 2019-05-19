import { Task } from 'src/app/interfaces/task';
import { NewTaskAction } from '../actions/new-task-action';
import * as newTask from '../actions/new-task-action';
import { TimeTrackingState } from './index';

export function reducer(
    state: TimeTrackingState = {tasks: []},
    action: NewTaskAction
  ) {
    switch (action.type) {
      case newTask.NEWTASK:

        return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }; 
      default:
        return state;
    }
  }