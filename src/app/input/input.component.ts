import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  @Output() createTask: EventEmitter<Task> = new EventEmitter<Task>();

  taskText = '';

  createNewConst() {
    const newTask: Task = {
      id: Date.now(),
      text: this.taskText,
    };
    return newTask;
  }

  createNewTask() {
    if (this.taskText.trim().length > 0) {
      this.createNewConst();
      this.createTask.emit(this.createNewConst());
      this.taskText = '';
    }
  }

}
