import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './services/to-do-list.service';

export interface Task {
  id: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'to-do-list';
  tasks;

  constructor(
    private toDoListService: ToDoListService
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.toDoListService.getTask();
  }

  onCreateTasks(task) {
    this.tasks = this.toDoListService.createTask(task);
}

  onDeleteTasks(id: number) {
    this.tasks = this.toDoListService.deleteTask(id);
  }

}
