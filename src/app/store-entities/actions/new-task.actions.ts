import { Action } from "@ngrx/store";
import { Task } from "../../interfaces/task";

export enum NewTaskActionTypes {
  CreateNewTask = "[NewTask] Create"
}

export class NewTaskAction implements Action {
  readonly type = NewTaskActionTypes.CreateNewTask;

  constructor(public payload: Task) {}
}