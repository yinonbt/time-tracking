import { TimeTrackingState } from '../reducers';

export const getTasks = (state) => {
  return state.newTask.tasks;
};

export const getActiveTaskId = (state) => {
  return state.newTask.activeTaskId;
};
