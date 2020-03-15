import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../app.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();

  toggleCrossOut = false;

  constructor() { }

  ngOnInit(): void {}

  deleteNewTask() {
    this.deleteTask.emit(this.task.id);
  }

  crossOutTask() {
    this.toggleCrossOut = !this.toggleCrossOut;
  }

}
