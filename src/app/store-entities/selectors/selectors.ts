import { TimeTrackingState } from '../reducers';

export const getTasks = (state) => {
  console.log('getTasks selector invoked: ', state);
  return state.newTask.tasks;
};
