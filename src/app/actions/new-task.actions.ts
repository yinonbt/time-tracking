import { Action } from "@ngrx/store";
import { Task } from "../interfaces/task";

export enum NewTaskActionTypes {
  CreateNewTask = "[NewTask] Create"
}

export class LoadNewTasks implements Action {
  readonly type = NewTaskActionTypes.CreateNewTask;

  constructor(public payload: Task) {}
}

export type NewTaskActions = LoadNewTasks;
