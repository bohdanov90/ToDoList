import { Injectable } from '@angular/core';
import { Task } from '../app.component';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ToDoListService {

  public toggleCrossOut = false;

  constructor(
    public localStorageService: LocalStorageService,
  ) {}

  getTask() {
    return this.localStorageService.getItem();
  }

  createTask(task: Task) {
    return this.localStorageService.createItem(task);
  }

  deleteTask(id: number) {
    return this.localStorageService.deleteItem(id);
  }

}
