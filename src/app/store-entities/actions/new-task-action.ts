import { Action } from '@ngrx/store';
import { Task } from 'src/app/interfaces/task';

export const NEWTASK = '[Task] New';

export class NewTaskAction implements Action {
    type = NEWTASK;

    constructor(public payload: Task) {}
}
