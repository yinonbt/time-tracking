import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {
  @Input() task: Task;
  
  constructor() { }

  ngOnInit() {
  }

}
