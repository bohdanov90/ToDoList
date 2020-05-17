import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {
  @Output() createTask: EventEmitter<Task> = new EventEmitter<Task>();

  public newTask: Task;
  public taskText = '';

  createNewTask(): void {
    if (this.taskText.trim().length > 0) {
      this.createTask.emit(
        this.newTask = {
          id: Date.now(),
          text: this.taskText,
        }
      );
      this.taskText = '';
    }
  }
}
