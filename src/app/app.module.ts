import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';
import { ToDoListService } from './services/to-do-list.service';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    InputComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LocalStorageService,
    ToDoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
