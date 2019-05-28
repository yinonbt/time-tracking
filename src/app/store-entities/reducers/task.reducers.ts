import { Task } from 'src/app/interfaces/task';
import { NewTaskAction, TaskAction } from '../actions/task.actions';
import * as newTaskAction from '../actions/task.actions';
import { TimeTrackingState } from './index';

export function reducer(
  state: TimeTrackingState = { tasks: [] },
  action: TaskAction
) {
  let newState: TimeTrackingState;
  switch (action.type) {
    case newTaskAction.TaskActionTypes.CreateNewTask:
      const newTask: Task = {
        id: state.tasks.length,
        title: action.newTaskTitle,
        secondsElapsed: 0,
        isActive: false
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
          if (taskToBeToggled.isActive) {
            taskToBeToggled.isActive = false;
          } else {
            const activeTasks = newState.tasks.filter(task => task.isActive);
            activeTasks.forEach(task => (task.isActive = false));
            taskToBeToggled.isActive = true;
          }
        }
      }
      return newState;
    case newTaskAction.TaskActionTypes.ProgressTask:
      newState = {
        ...state,
        tasks: [...state.tasks]
      };
      if (newState.tasks) {
        const taskToBeProgressed = newState.tasks.find(
          task => task.isActive);
        if (taskToBeProgressed) {
          taskToBeProgressed.secondsElapsed += 1;
        }
      }
      return newState;
    default:
      return state;
  }
}
