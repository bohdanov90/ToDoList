import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  public localStorageArray: Task[] = [];
  public localStorageName = 'to-do-list';

  constructor() {
    this.localStorageArray = this.getLocalStorage();
  }

  getLocalStorage(): Task[] {
    const value = localStorage.getItem(this.localStorageName);
    return !!value ? JSON.parse(value) : [];
  }

  setLocalStorage(): Task[] {
    localStorage.setItem(this.localStorageName, JSON.stringify(this.localStorageArray));
    return this.localStorageArray;
  }
}
