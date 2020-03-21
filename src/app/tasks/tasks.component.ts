import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../app.component';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {

  @Input() task: Task;
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();

  toggle: boolean = this.toDoListService.toggleCrossOut;

  constructor(public toDoListService: ToDoListService) {}

  deleteNewTask() {
    this.deleteTask.emit(this.task.id);
  }

  crossOutTask() {
    this.toggle = !this.toggle;
  }

}
