import { Time } from '@angular/common';

export interface Task {
    id: number;
    title: string;
    secondsElapsed: number;
    isActive: boolean;
}
