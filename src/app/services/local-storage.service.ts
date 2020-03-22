import { Injectable } from '@angular/core';
import { Task } from '../app.component';

const localStorageName = 'to-do-list';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  public localStorageArray: Task[] = [];

  constructor() {
    this.localStorageArray = this.getLocalStorage();
  }

  getLocalStorage() {
    const value = localStorage.getItem(localStorageName);
    return !!value ? JSON.parse(value) : [];
  }

  setLocalStorage() {
    localStorage.setItem(localStorageName, JSON.stringify(this.localStorageArray));
    return this.localStorageArray;
  }

}
