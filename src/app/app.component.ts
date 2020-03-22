import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './services/to-do-list.service';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'to-do-list';
  tasks: Task[];

  constructor(
    private toDoListService: ToDoListService
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.toDoListService.getTask();
  }

  onCreateTasks(task: Task) {
    this.tasks = this.toDoListService.createTask(task);
}

  onDeleteTasks(id: number) {
    this.tasks = this.toDoListService.deleteTask(id);
  }

}
