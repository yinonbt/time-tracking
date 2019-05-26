import { Action } from '@ngrx/store';

export enum TaskActionTypes {
  CreateNewTask = '[NewTask] Create',
  ToggleTask = '[ToggleTask] Load ToggleTasks',
  ProgressTask = '[ProgressTask] Progress Active Task'
}

export class TaskAction implements Action {
  newTaskTitle: string;
  taskToBeModifiedId: number;
  readonly type: TaskActionTypes;

  constructor(taskActionType: TaskActionTypes) {
    this.type = taskActionType;
  }
}
export class NewTaskAction extends TaskAction {
  constructor(public payload: string) {
    super(TaskActionTypes.CreateNewTask);
    this.newTaskTitle = payload;
  }
}

export class ToggleTaskAction extends TaskAction {
  constructor(public payload: number) {
    super(TaskActionTypes.ToggleTask);
    this.taskToBeModifiedId = payload;
  }
}

export class ProgressTaskAction extends TaskAction {
  constructor() {
    super(TaskActionTypes.ProgressTask);
  }
}
