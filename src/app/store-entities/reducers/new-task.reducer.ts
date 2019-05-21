import { Task } from 'src/app/interfaces/task';
import { NewTaskAction } from '../actions/new-task.actions';
import * as newTaskAction from '../actions/new-task.actions';
import { TimeTrackingState } from './index';

export function reducer(
  state: TimeTrackingState = { tasks: [] },
  action: NewTaskAction
) {
  switch (action.type) {
    case newTaskAction.NewTaskActionTypes.CreateNewTask: 
    const newTask: Task = { id: state.tasks.length, title: action.payload, secondsElapsed: 0, isActive: false };     
      const newState = {
        ...state,
        tasks: [...state.tasks, newTask]
      };
      console.log('new task reducer: ', newState);
      return newState;
    default:
      return state;
  }
}
