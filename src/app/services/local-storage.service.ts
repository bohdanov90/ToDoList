import { Injectable } from '@angular/core';

const storageName = 'to-do-list';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  public localStorageArray = [];

  constructor() {}

  updateLocalStorage() {
    localStorage.setItem(storageName, JSON.stringify(this.localStorageArray));
    return this.localStorageArray;
  }

  getItem() {
    return this.localStorageArray = JSON.parse(localStorage.getItem(storageName));
  }

  createItem(item) {
    this.localStorageArray = [...this.localStorageArray, item];
    return this.updateLocalStorage();
  }

  deleteItem(id: number) {
    this.localStorageArray = this.localStorageArray.filter(el => el.id !== id);
    return this.updateLocalStorage();
  }

}
