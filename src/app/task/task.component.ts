import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/task';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {

  @Input() task: Task;
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();

  public toggle: boolean = this.toDoListService.toggleCrossOut;

  constructor(public toDoListService: ToDoListService) {}

  deleteNewTask() {
    this.deleteTask.emit(this.task.id);
  }

  crossOutTask() {
    this.toggle = !this.toggle;
  }

}
