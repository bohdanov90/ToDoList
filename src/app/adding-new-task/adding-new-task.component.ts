import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../app.component';

@Component({
  selector: 'app-adding-new-task',
  templateUrl: './adding-new-task.component.html',
  styleUrls: ['./adding-new-task.component.scss']
})

export class AddingNewTaskComponent implements OnInit {

  @Output() createTask: EventEmitter<Task> = new EventEmitter<Task>();

  taskText = '';

  constructor() { }

  ngOnInit(): void {}

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