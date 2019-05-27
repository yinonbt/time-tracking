import { TimeTrackingState } from '../reducers';

export const getTasks = (state) => {
  return state.newTask.tasks;
};
