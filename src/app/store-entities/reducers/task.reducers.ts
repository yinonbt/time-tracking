import { Task } from 'src/app/interfaces/task';
import { NewTaskAction, TaskAction } from '../actions/task.actions';
import * as newTaskAction from '../actions/task.actions';
import { TimeTrackingState } from './index';

export function reducer(
  state: TimeTrackingState = { tasks: [], activeTaskId: null },
  action: TaskAction
) {
  let newState: TimeTrackingState;
  switch (action.type) {
    case newTaskAction.TaskActionTypes.CreateNewTask:
      const newTask: Task = {
        id: state.tasks.length,
        title: action.newTaskTitle,
        secondsElapsed: 0
      };
      newState = {
        ...state,
        tasks: [...state.tasks, newTask]
      };
      console.log('new task reducer: ', newState);
      return newState;
    case newTaskAction.TaskActionTypes.ToggleTask:
      newState = {
        ...state,
        tasks: [...state.tasks]
      };
      if (newState.tasks) {
        const taskToBeToggled = newState.tasks.find(
          task => task.id === action.taskToBeModifiedId
        );
        if (taskToBeToggled) {
          if (
            newState.activeTaskId != null &&
            newState.activeTaskId === taskToBeToggled.id
          ) {
            newState.activeTaskId = null;
          } else {
            newState.activeTaskId = taskToBeToggled.id;
          }
        }
      }
      console.log('toggle task reducer: ', newState);
      return newState;
    case newTaskAction.TaskActionTypes.ProgressTask:
      newState = {
        ...state,
        tasks: [...state.tasks]
      };
      if (newState.tasks && newState.activeTaskId != null) {
        const taskToBeProgressed = newState.tasks.find(
          task => task.id === newState.activeTaskId
        );
        if (taskToBeProgressed) {
          taskToBeProgressed.secondsElapsed += 1;
        }
        console.log('progress task reducer: ', newState);
      }
      return newState;
    default:
      return state;
  }
}
