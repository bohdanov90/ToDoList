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
    return this.localStorageService.getLocalStorage();
  }

  createTask(task: Task) {
    this.localStorageService.localStorageArray = [task, ...this.localStorageService.localStorageArray];
    return this.localStorageService.setLocalStorage();
  }

  deleteTask(id: number) {
    this.localStorageService.localStorageArray = this.localStorageService.localStorageArray.filter(el => el.id !== id);
    return this.localStorageService.setLocalStorage();
  }

}
