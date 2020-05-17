import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();

  public toggleCrossOut = false;
  public trashIcon = faTrash;

  deleteNewTask(): void {
    this.deleteTask.emit(this.task.id);
  }

  crossOutTask(): void {
    this.toggleCrossOut = !this.toggleCrossOut;
  }
}
