import { Injectable } from '@angular/core';
import {Task} from '../app.component';

const storageName = 'to-do-list';
let localStorageArray: Task[] = [];

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() {
    localStorageArray = this.getItem();
  }

  updateLocalStorage() {
    localStorage.setItem(storageName, JSON.stringify(localStorageArray));
    return localStorageArray;
  }

  getItem() {
    const value = localStorage.getItem(storageName);
    return !!value ? JSON.parse(value) : [];
  }

  createItem(item: Task) {
    localStorageArray = [...localStorageArray, item];
    return this.updateLocalStorage();
  }

  deleteItem(id: number) {
    localStorageArray = localStorageArray.filter(el => el.id !== id);
    return this.updateLocalStorage();
  }

}
