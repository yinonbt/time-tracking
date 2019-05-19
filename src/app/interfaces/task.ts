import { Time } from '@angular/common';

export interface Task {
    title: string;
    timeElapsed: Time;
    isActive: boolean;
}
