import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ToDoListService {
  constructor(
    public localStorageService: LocalStorageService,
  ) {}

  getTask(): Task[] {
    return this.localStorageService.getLocalStorage();
  }

  createTask(task: Task): Task[] {
    this.localStorageService.localStorageArray = [task, ...this.localStorageService.localStorageArray];
    return this.localStorageService.setLocalStorage();
  }

  deleteTask(id: number): Task[] {
    this.localStorageService.localStorageArray = this.localStorageService.localStorageArray.filter(el => el.id !== id);
    return this.localStorageService.setLocalStorage();
  }
}
